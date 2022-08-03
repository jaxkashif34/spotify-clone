import RootStack from "./src/navigation/RootStack";
import AppState from "./src/context";
import { StatusBar, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import savedImages from "./src/constants/preLoadImages";
import savedFonts from "./src/constants/preLoadFonts";
import { gStyle } from "./src/constants";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  function cacheImages(images) {
    return Object.values(images).map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  function cacheFonts(fonts) {
    return fonts.map((font) => Font.loadAsync(font));
  }

  // Load any resources or data that you need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        const imageAssets = cacheImages(savedImages);
        const fontAssets = cacheFonts(savedFonts);

        await Promise.all([...imageAssets, ...fontAssets]);

        await console.log("complete");
      } catch (e) {
        // You might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <Text>Loading Assets...</Text>
      </View>
    );
  }

  return (
    <AppState>
      <StatusBar barStyle="light-content" />
      <RootStack />
    </AppState>
  );
}
