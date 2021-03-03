import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
    alignItems: "center",
    justifyContent: "center"
  },
  serviceName: {
    fontSize: 24,
    color: "#000",
    height: 31
  },
  icon: {
    color: "rgba(255,40,0,1)",
    fontSize: 40,
    margin: 46
  }
});

export default ServiceList;
