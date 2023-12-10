import React from "react";
import HomeScreen from "../screens/Home";
import AlbumScreen from "../screens/Album";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function StackHome() {
  const theme = useTheme() // we can get the access of theme object anywhere in a component that is rendered inside the navigation container
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Album"
        component={AlbumScreen}
        initialParams={{ title: "ExtraOrdinary Machine" }}
      />
    </Stack.Navigator>
  );
}
