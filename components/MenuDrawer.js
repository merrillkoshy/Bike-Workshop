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
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              // needs toast workaround for ios
              // Toast.showWithGravity(
              //   "Succesfully signed out",
              //   Toast.LONG,
              //   Toast.CENTER
              // );
            })
            .then(async () => {
              try {
                props.navigation.dispatch(DrawerActions.closeDrawer());
                return true;
              } catch (error) {
                return false;
              }
            })
            .catch((error) => {
              // needs toast workaround for ios
              //   Toast.showWithGravity(
              //     "An error " + error + " - occured while signing out",
              //     Toast.LONG,
              //     Toast.CENTER
              //   );
            });
        }}
      />
    </DrawerContentScrollView>
  );
}

export default MenuDrawer;
