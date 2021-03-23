import React, { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import firebase from "../../firebase";
import "firebase/database";
import "firebase/auth";
import Modal from "react-native-modal";
import StatusView from "../StatusView";

function CurrentBooking(props) {
  const user = props.user;
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [status, setStatus] = useState(null);
  const [booking, setBooking] = useState(null);

  const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   console.log("called");
  //   setModalVisible(!isModalVisible);
  // };

  useEffect(() => {
    if (user != null) {
      const db = firebase.database().ref("users/" + user?.uid + "/bookings");
      db.on("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          for (const [key, value] of Object.entries(data)) {
            setBooking(value);
            if (value.bookingStatus !== "closed") {
              setStatus(value.bookingStatus);
              setImage(value.image);
              setServiceName(value.serviceName);
            } else {
              setStatus("closed");
            }
          }
        }
      });
    }
    return () => {
      setModalVisible(false);
    };
  }, []);
  return (
    <View style={[styles.container, props.style]}>
      {image && (
        <Image
          source={{
            uri: image,
          }}
          style={styles.cardItemImagePlace}
        ></Image>
      )}

      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>
            {serviceName ? `${serviceName}` : "Book a Service"}
          </Text>
          <Text style={styles.subtitleStyle}>
            {status
              ? status != "closed"
                ? `Booking Status: ${status}`
                : "Book a Service"
              : ""}
          </Text>
        </View>
        <View style={styles.actionBody}>
          <Pressable
            style={styles.actionButton1}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.actionText1}>Status</Text>
          </Pressable>
        </View>
      </View>
      <Modal
        style={styles.modalContainer}
        animationIn={"rubberBand"}
        animationOut={"slideOutDown"}
        isVisible={isModalVisible}
        animationOutTiming={1000}
        transparent={true}
      >
        <View style={styles.modalContent}>
          <StatusView
            booking={booking}
            closeModal={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

export default CurrentBooking;
