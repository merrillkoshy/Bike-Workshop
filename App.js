import React from "react";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";

import RootDrawer from "./navigation/DrawerNav";

const appTheme = {
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#FFF",
    card: "rgb(255, 255, 255)",
    text: "#0c0c0c",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)"
  }
};
export default function App(props) {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={appTheme}>
      <StatusBar animated={true} backgroundColor="#ff2800" />
      <RootDrawer {...props} />
    </NavigationContainer>
  );
}
