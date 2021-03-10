import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import theme from "../appStyles";
function SiteButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.container, props.style]}
    >
      <Text
        style={{
          color: theme?.THEME_LIGHT,
          fontSize: props.fontSize ? props.fontSize : 14,
        }}
      >
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme?.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default SiteButton;
