import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import theme from "../appStyles";
function MaterialUnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text placeholder="Placeholder" style={styles.inputStyle}>
        {props.string}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: theme?.TEXT_INPUT,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16
  }
});

export default MaterialUnderlineTextbox;
