import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";

import styles from "./styles";
import firebase from "../../firebase";
import "firebase/database";
import "firebase/auth";
import Modal from "react-native-modal";
import StatusView from "../StatusView";
import Shimmer from "../Shimmer";

function CurrentBooking(props) {
  const [modalContent, setModalContent] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [shimmering, setShimmering] = useState(false);

  const bookingsList = () => {
    var bookingsList = [];
    const db = firebase
      .database()
      .ref("users/" + props?.user?.uid + "/bookings");
    db.on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        const bookingsObject = snap.val();
        bookingsList.push(bookingsObject);
      });
    });
    setBookingData(bookingsList.reverse());
  };

  useEffect(() => {
    bookingsList();
    return () => {
      setModalVisible(false);
    };
  }, []);

  return (
    <>
      {bookingData && bookingData?.length > 0 ? (
        <View style={{ flex: 1 }}>
          <View style={{ alignSelf: "center", justifyContent: "center" }}>
            <Shimmer
              width={Dimensions.get("window").width / 1.1}
              height={styles.cardItemImagePlace.height}
              visible={shimmering}
            />
            {!shimmering && (
              <View style={styles.cardBody}>
                <View style={styles.bodyContent}>
                  <Text style={styles.titleStyle}>Loading</Text>
                  <Text style={styles.subtitleStyle}>loading...</Text>
                </View>
              </View>
            )}
          </View>
          <CardStack
            loop={true}
            ref={(swiper) => setSwiper(swiper)}
            renderNoMoreCards={() => (
              <TouchableOpacity onPress={() => swiper.goBackFromRight(0)}>
                <Text
                  style={{ fontWeight: "700", fontSize: 18, color: "gray" }}
                >
                  No more bookings.
                </Text>
              </TouchableOpacity>
            )}
            style={styles.content}
          >
            {bookingData.map((data, i) => {
              return (
                <Card key={i} style={styles.card}>
                  <Image
                    source={{
                      uri: data?.image,
                    }}
                    onLoadEnd={() => setShimmering(true)}
                    style={styles.cardItemImagePlace}
                  />
                  <View style={styles.cardBody}>
                    <View style={styles.bodyContent}>
                      <Text style={styles.titleStyle}>
                        {data.serviceName
                          ? `${data.serviceName}`
                          : "Book a Service"}
                      </Text>
                      <Text style={styles.subtitleStyle}>
                        {data.bookingStatus
                          ? `Booking Status: ${data.bookingStatus}`
                          : null}
                      </Text>
                      <Text style={styles.pickAndDrop}>
                        {data.pickAndDrop
                          ? `Pick up between ${data.timeSlot}`
                          : data?.bookingStatus == "closed"
                          ? `Completed on ${data?.completionDate}`
                          : "Receive at service center"}
                      </Text>
                    </View>
                    <View style={styles.actionBody}>
                      <Pressable
                        style={styles.actionButton1}
                        onPress={() => {
                          setModalContent(data);
                          setModalVisible(true);
                        }}
                      >
                        <Text style={styles.actionText1}>Status</Text>
                      </Pressable>
                    </View>
                  </View>
                </Card>
              );
            })}
          </CardStack>
          <Text
            style={{
              lineHeight: 25,
              textAlign: "center",
              color: "#808080",
              backgroundColor: "#FFFFFF",
            }}
          >
            Swipe cards to see your booking history
          </Text>
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
                booking={modalContent}
                closeModal={() => setModalVisible(false)}
              />
            </View>
          </Modal>
        </View>
      ) : (
        <View
          style={{
            elevation: 3,
            height: 220,
            shadowColor: "#000000",
            shadowOffset: {
              width: -2,
              height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 1.5,
          }}
        >
          <Image
            source={require("../../assets/images/bookAService.png")}
            resizeMode="contain"
            style={styles.makeABooking}
          />
          <View style={styles.bookAService}>
            <View style={styles.bookAServiceBody}>
              <Text style={styles.titleStyleNone}>No Services Booked Yet</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

export default CurrentBooking;
