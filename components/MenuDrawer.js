import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import firebase from "./firebase";
import "firebase/auth";
import { DrawerActions } from "@react-navigation/core";

function MenuDrawer(props) {
  var user = firebase.auth().currentUser;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default MenuDrawer;
