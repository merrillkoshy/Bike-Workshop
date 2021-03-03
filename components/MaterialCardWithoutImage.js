import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCardWithoutImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialCommunityIconsIcon
        name="newspaper"
        style={styles.icon}
      ></MaterialCommunityIconsIcon>
      <Text style={styles.someActivity}>{props.string}</Text>
      <MaterialCommunityIconsIcon
        name="chevron-right"
        style={styles.icon2}
      ></MaterialCommunityIconsIcon>
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
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between"
  },
  icon: {
    color: "rgba(255,40,0,1)",
    fontSize: 40,
    alignSelf: "center",
    left: 0,
    width: 40,
    top: 9,
    height: 44,
    marginLeft: 24
  },
  someActivity: {
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 21,
    left: 72
  },
  icon2: {
    left: 283,
    position: "absolute",
    color: "rgba(255,40,0,1)",
    fontSize: 40,
    right: 36
  }
});

export default MaterialCardWithoutImage;
