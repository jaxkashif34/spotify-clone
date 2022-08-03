import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context";
import BarMusicPlayer from "./BarMusicPlayer";
import { colors, device, gStyle } from "../constants";

export default function CustomTabBar({ descriptors, navigation, state }) {
  const { showMusicBar, currentSongData } = useContext(Context);

  return (
    <>
      {showMusicBar && <BarMusicPlayer song={currentSongData} />}

      <View style={styles.container}>
        {state.routes.map((route, i) => {
          const { options } = descriptors[route.key];

          // default labels

          const defaultLabels =
            options.title !== undefined ? options.title : route.name;

          // label set

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : defaultLabels;

          const isFocused = state.index === i;
          const color = isFocused ? colors.white : colors.greyInactive;

          // custom icon

          const Icon = options.tabBarIcon;
          // console.log(route);
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAssessibilityLabel}
              activeOpacity={gStyle.activeOpacity}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.containerTab}
            >
              <Icon active={isFocused} />

              <Text style={[styles.lable, { color }]}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gStyle.flexRowCenterAlign,
    backgroundColor: colors.grey,
    paddingBottom: device.iPhoneNotch ? 24 : 16,
    paddingTop: 12,
  },
  containerTab: {
    ...gStyle.flex1,
    ...gStyle.flexCenter,
  },
  label: {
    ...gStyle.textSpotify12,
    paddingTop: 4,
  },
});
