import React, { Component } from "react";
import { Image } from "react-native";

import MenuButton from "../MenuButton";
import styles from "./styles";

export default function headerOptions(props) {
  return {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    },
    headerLeft: () => (
      <Image
        source={require("../../assets/images/Mono-w-06.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
    ),
    headerRight: () => (
      <MenuButton
        style={styles.materialButtonTransparentHamburger}
        {...props}
      ></MenuButton>
    )
  };
}
