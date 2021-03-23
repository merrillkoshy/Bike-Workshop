import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../appStyles";
function InfoCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props?.toggleModal}>
        <MaterialCommunityIconsIcon
          name="newspaper"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.someActivity}>{props.string}</Text>
        <MaterialCommunityIconsIcon
          name="chevron-right"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: theme?.THEME_LIGHT,
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  icon: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 40,
    alignSelf: "center",
    position: "absolute",
    left: 10,
  },
  someActivity: {
    position: "absolute",
    alignSelf: "center",
    // fontFamily: "roboto-regular",
    color: theme?.TEXT_LIGHT,
    fontSize: 21,
    left: 72,
  },
  icon2: {
    position: "absolute",
    color: theme?.PRIMARY_COLOR,
    alignSelf: "center",
    fontSize: 40,
    right: 10,
  },
});

export default InfoCard;
