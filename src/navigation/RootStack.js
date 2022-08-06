import React from "react";
import TabNavigation from "./TabNavigation";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalMusicPlayer from "../screens/ModalMusicPlayer";
import ModalMoreOptions from "../screens/ModalMoreOptions";

const Stack = createNativeStackNavigator();
export default function RootStack() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{ presentation: "fullScreenModal", headerShown: false }}
      >
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen
          name="ModalMusicPlayer"
          component={ModalMusicPlayer}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="ModalMoreOptions"
          component={ModalMoreOptions}
          options={{
            animation: "fade",
            presentation: "transparentModal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
