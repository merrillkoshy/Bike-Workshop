import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from "@react-navigation/core";

import styles from "./styles";

const MenuButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation?.dispatch(DrawerActions.toggleDrawer());
      }}
      style={[styles.container, props.style]}
    >
      <Icon name="menu" style={styles.caption}></Icon>
    </TouchableOpacity>
  );
};

export default MenuButton;
