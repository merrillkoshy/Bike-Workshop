import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import "firebase/database";
import "firebase/auth";

function BookingPlaceHolder(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Book a Service</Text>
          <Text style={styles.subtitleStyle}>{"Book a Service"}</Text>
        </View>
        <View style={styles.actionBody}></View>
      </View>
    </View>
  );
}

export default BookingPlaceHolder;
