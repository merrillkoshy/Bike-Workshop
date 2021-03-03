import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import TextButton from "./TextButton";

function HistoryJobCards(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.tireChange}>Tire Change</Text>
      </View>
      <TextButton style={styles.materialButtonWithVioletText}></TextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    justifyContent: "center"
  },
  tireChange: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  materialButtonWithVioletText: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 14,
    top: 55
  }
});

export default HistoryJobCards;
