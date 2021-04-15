import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const SiteButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.container, props.style]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            fontSize: props.fontSize ? props.fontSize : 14,
          },
        ]}
      >
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default SiteButton;
