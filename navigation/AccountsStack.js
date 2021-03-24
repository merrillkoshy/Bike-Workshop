import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuButton from "../components/MenuButton";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import styles from "./styles";
import ProfilePage from "../screens/Profile";
import headerOptions from "../components/Header";
const Stack = createStackNavigator();

export default function AccountsScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "#424242",
          },
          headerTintColor: "#FFFFFF",
        }}
        component={Login}
      />
      <Stack.Screen
        name="Create Account"
        component={CreateAccount}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "#424242",
          },
          headerTintColor: "#FFFFFF",
        }}
      />
    </Stack.Navigator>
  );
}
