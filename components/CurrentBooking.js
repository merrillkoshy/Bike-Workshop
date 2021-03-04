import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import theme from "../appStyles";
import firebase from "./firebase";
import "firebase/database";
function CurrentBooking(props) {
  const user = props.user;
  useEffect(() => {
    if (user != null) {
      firebase.database().ref("users/" + user.uid);
      // .set({
      //   highscore: score
      // });
    }
    return () => {
      //
    };
  }, []);
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/sample.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Chain and Sprocket Replacement</Text>
          <Text style={styles.subtitleStyle}>Subtitle here</Text>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.actionText1}>ACTION 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.actionText2}>ACTION 2</Text>
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
    backgroundColor: theme?.THEME_LIGHT,
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 359
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    right: 0
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    backgroundColor: "rgba(4,4,4,0.6)"
  },
  titleStyle: {
    fontSize: 22,
    color: theme?.TEXT_DARK,
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    lineHeight: 16,
    opacity: 0.5
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  actionText1: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  actionText2: {
    fontSize: 14,
    color: theme?.TEXT_DARK,
    opacity: 0.9
  }
});

export default CurrentBooking;
