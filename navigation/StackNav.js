import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuButton from "../components/MenuButton";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import styles from "./styles";
const Stack = createStackNavigator();

export default function AccountsScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerRight: () => (
            <MenuButton
              style={styles.materialButtonTransparentHamburger}
              {...props}
            ></MenuButton>
          )
        }}
      />
      <Stack.Screen name="Create Account" component={CreateAccount} />
    </Stack.Navigator>
  );
}
