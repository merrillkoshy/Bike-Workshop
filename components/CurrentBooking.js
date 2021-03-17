import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import theme from "../appStyles";
import firebase from "./firebase";
import "firebase/database";
import "firebase/auth";

function CurrentBooking(props) {
  const user = props.user;
  const [image, setImage] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    if (user != null) {
      const db = firebase.database().ref("users/" + user?.uid + "/bookings");
      db.on("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          for (const [key, value] of Object.entries(data)) {
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
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.actionText1}>ACTION 1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: theme?.HASNAIN_GREY,
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 359,
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    right: 0,
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    backgroundColor: "rgba(4,4,4,0.6)",
  },
  titleStyle: {
    fontSize: 22,
    color: theme?.TEXT_DARK,
    paddingBottom: 12,
    textTransform: "capitalize",
  },
  subtitleStyle: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    lineHeight: 16,
    opacity: 0.5,
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
  },
  actionButton1: {
    padding: 8,
    height: 36,
  },
  actionText1: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    opacity: 0.9,
  },
  actionButton2: {
    padding: 8,
    height: 36,
  },
  actionText2: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    opacity: 0.9,
  },
});

export default CurrentBooking;
