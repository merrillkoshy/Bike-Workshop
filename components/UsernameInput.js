import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function UsernameInput(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  }
});

export default UsernameInput;
