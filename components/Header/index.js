import React, { Component } from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";

import MenuButton from "../MenuButton";
import styles from "./styles";

export default function headerOptions(props) {
  return {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: "#424242",
    },
    headerTintColor: "#FFFFFF",
    headerLeft: () => (
      <Pressable onPress={() => props?.navigation.navigate("Home")}>
        <Image
          source={require("../../assets/images/Monogram.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </Pressable>
    ),
    headerRight: () => (
      <MenuButton
        style={styles.materialButtonTransparentHamburger}
        {...props}
      ></MenuButton>
    ),
  };
}

export function partialHeader(props) {
  return {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: "#424242",
    },
    headerTitleAlign: "center",
    headerRight: () => (
      <Image
        source={require("../../assets/images/Monogram.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
    ),
  };
}
