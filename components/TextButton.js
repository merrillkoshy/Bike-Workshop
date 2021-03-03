import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function TextButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.group}>
        <Icon name="newspaper" style={styles.icon}></Icon>
        <TextInput placeholder="INVOICE" style={styles.textInput}></TextInput>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  group: {
    width: 77,
    height: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginTop: 7
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  textInput: {
    color: "#3F51B5",
    fontSize: 14,
    textAlign: "right",

    height: 23,
    left: 8
  }
});

export default TextButton;
