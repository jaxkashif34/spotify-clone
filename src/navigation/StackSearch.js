import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

export default function StackSearch() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
