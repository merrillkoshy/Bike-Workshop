import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../appStyles";
function ServiceList(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.serviceName}>{props.string}</Text>
      <Icon name="chevron-right" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: theme?.THEME_LIGHT,
    shadowColor: theme?.TEXT_INPUT,
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  serviceName: {
    fontSize: 18,
    color: theme?.TEXT_INPUT,
    position: "absolute",
    left: 12
  },
  icon: {
    color: theme?.PRIMARY_COLOR,
    fontSize: 40,
    position: "absolute",
    right: 0
  }
});

export default ServiceList;
