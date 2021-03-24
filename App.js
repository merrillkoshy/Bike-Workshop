import React, { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./appStyles";

import Toast from "react-native-toast-message";
import firebase from "./firebase";
import AppStack from "./navigation/AppStack";

export default function App(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(firebase.auth().currentUser);
  }, []);
  return (
    <NavigationContainer>
      <StatusBar
        style="light"
        animated={true}
        backgroundColor={theme?.HASNAIN_GREY}
      />
      <AppStack />

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
