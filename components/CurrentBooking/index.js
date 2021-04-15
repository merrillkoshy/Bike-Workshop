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
  const [pickAndDrop, setPickAndDrop] = useState(false);
  const [timeSlot, setTimeSlot] = useState(null);
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
            setStatus(value.bookingStatus);
            setImage(value.image);
            setServiceName(value.serviceName);
            setPickAndDrop(value.pickAndDrop);
            setTimeSlot(value.timeSlot);
          }
        }
      });
    }
    return () => {
      setModalVisible(false);
    };
  }, []);
  return (
    <>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.cardItemImagePlace}
        ></Image>
      ) : null}

      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>
            {serviceName ? `${serviceName}` : "Book a Service"}
          </Text>
          <Text style={styles.subtitleStyle}>
            {status ? `Booking Status: ${status}` : "Book a Service"}
          </Text>
          <Text style={styles.pickAndDrop}>
            {pickAndDrop
              ? `Pick up between ${timeSlot}`
              : "Receive at service center"}
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
        animationOut={"bounceOut"}
        isVisible={isModalVisible}
        animationInTiming={500}
        animationOutTiming={500}
        transparent={true}
      >
        <View style={styles.modalContent}>
          <StatusView
            booking={booking}
            closeModal={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </>
  );
}

export default CurrentBooking;
