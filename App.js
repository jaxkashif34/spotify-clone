import RootStack from './src/navigation/RootStack';
import AppState from './src/context';
import { StatusBar, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { loadAsync } from 'expo-font';
import { Asset } from 'expo-asset';
import { savedImages } from './src/constants/preLoadImages';
import { savedFonts } from './src/constants/preLoadFonts';
import { gStyle } from './src/constants';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  async function cacheImages() {
    for (const images of Object.values(savedImages)) {
      await Asset.fromModule(images).downloadAsync();
    }
  }

  async function cacheFonts() {
    await loadAsync({
      // have to spread the object into the loadAsync function or it will not work
      ...savedFonts,
    });
  }

  // Load any resources or data that you need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await cacheImages();
        await cacheFonts();

        console.log('Assets loaded successfully');
      } catch (e) {
        // You might want to provide this error information to an error reporting service
        console.warn(e.message);
      } finally {
        SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!appIsReady) {
    // Todo: need to add a proper loading screen here
    return (
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
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
