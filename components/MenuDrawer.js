import React from "react";
import Toast from "react-native-simple-toast";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from "@react-navigation/drawer";
import firebase from "./firebase";
import "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
              Toast.showWithGravity(
                "Succesfully signed out",
                Toast.LONG,
                Toast.CENTER
              );
            })
            .then(async () => {
              try {
                await AsyncStorage.removeItem("@loggedUser");
                return true;
              } catch (error) {
                return false;
              }
            })
            .catch(error => {
              Toast.showWithGravity(
                "An error " + error + " - occured while signing out",
                Toast.LONG,
                Toast.CENTER
              );
            });
        }}
      />
    </DrawerContentScrollView>
  );
}

export default MenuDrawer;
