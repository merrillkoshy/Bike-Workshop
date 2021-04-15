import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuButton from "../components/MenuButton";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import styles from "./styles";

import headerOptions, { partialHeader } from "../components/Header";
import RootDrawer from "./DrawerNav";

import Booking from "../screens/Booking";
const Stack = createStackNavigator();

export default function AppStack(props) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Create Account"
        component={CreateAccount}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Dashboard"
        component={RootDrawer}
      />

      <Stack.Screen
        name="Booking"
        options={partialHeader(props)}
        component={Booking}
      />
    </Stack.Navigator>
  );
}
