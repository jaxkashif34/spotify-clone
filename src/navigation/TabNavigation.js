import React from "react";
import StackHome from "./StackHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SvgIcon from "../icons";
import {
  homePathActive,
  homePathInactive,
  LibraryActive,
  libraryInActive,
  SearchActive,
  SearchInActive,
} from "../icons/Paths";
import { colors } from "../constants";
import CustomTabBar from "../components/CustomTabBar";
import StackLibrary from "./StackLibrary";
import StackSearch from "./StackSearch";

const getIcon = (active, activeState, inActiveState) => (
  <SvgIcon path={active ? activeState : inActiveState} active={active} />
);

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ active }) => {
          let icon = getIcon(active, homePathActive, homePathInactive);
          if (route.name === "StackSearch") {
            icon = getIcon(active, SearchActive, SearchInActive);
          } else if (route.name === "StackLibrary") {
            icon = getIcon(active, LibraryActive, libraryInActive);
          }
          return icon;
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.greyInactive,
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="StackSearch"
        component={StackSearch}
        options={{ tabBarLabel: "Search" }}
      />
      <Tab.Screen
        name="StackLibrary"
        component={StackLibrary}
        options={{ tabBarLabel: "Library" }}
      />
    </Tab.Navigator>
  );
}
