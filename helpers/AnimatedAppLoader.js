import React, { useState, useMemo } from "react";
import AnimatedSplashScreen from "./AnimatedSplashScreen";
import AppLoading from "expo-app-loading";

const AnimatedAppLoader = ({ children, image }) => {
  const [isSplashReady, setSplashReady] = useState(false);

  const _cacheResourcesAsync = async () => {
    useMemo(
      // If you use a local image with require(...), use `Asset.fromModule`
      () => () => Asset.fromURI(image).downloadAsync(),
      [image]
    );

    const loadFonts = async () => {
      await Font.loadAsync({
        "Ubuntu-R": require("../assets/Ubuntu-R.ttf"),
        "Ubuntu-L": require("../assets/Ubuntu-L.ttf"),
        "Ubuntu-B": require("../assets/Ubuntu-B.ttf"),
      });
    };
    return Promise.all(loadFonts);
  };

  const onFinish = useMemo(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        // Instruct SplashScreen not to hide yet, we want to do this manually
        autoHideSplash={false}
        startAsync={_cacheResourcesAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
};
export default AnimatedAppLoader;
