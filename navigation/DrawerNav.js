import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilePage from "../screens/Profile";
import theme from "../appStyles";
import Home from "./TabNav";
import AccountsScreen from "./StackNav";
import MenuDrawer from "../components/MenuDrawer";
import firebase from "../components/firebase";
import "firebase/auth";

const Drawer = createDrawerNavigator();

export default function RootDrawer(props) {
  var user = firebase.auth().currentUser;
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuDrawer {...props} />}
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: theme?.THEME_LIGHT,
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: theme?.PRIMARY_COLOR,
        inactiveTintColor: theme?.INACTIVE,
      }}
    >
      <Drawer.Screen name="Home" component={Home} props={props} />
      {user ? (
        <Drawer.Screen name="Profile" component={ProfilePage} />
      ) : (
        <Drawer.Screen name="Profile" component={AccountsScreen} />
      )}

      <Drawer.Screen name="Login" component={AccountsScreen} props={props} />
    </Drawer.Navigator>
  );
}
