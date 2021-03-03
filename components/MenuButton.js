import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from "@react-navigation/core";

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
    color: "rgba(255,40,0,1)",
    fontSize: 24
  }
});

export default MenuButton;
