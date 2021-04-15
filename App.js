import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

import theme from "./appStyles";
import { default as evaTheme } from "./app-theme.json";
import { default as mapping } from "./mapping.json";

import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Toast from "react-native-toast-message";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppLoading from "expo-app-loading";

import AppStack from "./navigation/AppStack";

export default function App(props) {
  const [appIsReady, setAppIsReady] = useState(false);

  const _cacheResourcesAsync = async () => {
    return Promise.all(
      await Font.loadAsync({
        "Ubuntu-R": require("./assets/Ubuntu-R.ttf"),
        "Ubuntu-L": require("./assets/Ubuntu-L.ttf"),
        "Ubuntu-B": require("./assets/Ubuntu-B.ttf"),
      })
    );
  };

  if (!appIsReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setAppIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...evaTheme }}
        customMapping={mapping}
      >
        <NavigationContainer>
          <StatusBar
            style="light"
            animated={true}
            backgroundColor={theme?.HASNAIN_GREY}
          />
          <AppStack />

          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
