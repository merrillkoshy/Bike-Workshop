import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilePage from "../screens/Profile";

import Home from "./TabNav";
import AccountsScreen from "./StackNav";

const Drawer = createDrawerNavigator();

export default function RootDrawer(props) {
  return (
    <Drawer.Navigator
      //   drawerContent={props => <MenuDrawer {...props} />}
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: "#FFFFFF",
        width: 240
      }}
      drawerContentOptions={{
        activeTintColor: "#ff2800",
        inactiveTintColor: "#616161"
      }}
    >
      <Drawer.Screen name="Home" component={Home} props={props} />

      <Drawer.Screen name="Profile" component={ProfilePage} />

      <Drawer.Screen name="Login" component={AccountsScreen} props={props} />
    </Drawer.Navigator>
  );
}
