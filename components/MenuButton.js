import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from "@react-navigation/core";
import theme from "../appStyles";
function MenuButton(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.dispatch(DrawerActions.toggleDrawer());
      }}
      style={[styles.container, props.style]}
    >
      <Icon name="menu" style={styles.caption}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2
  },
  caption: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 24
  }
});

export default MenuButton;
