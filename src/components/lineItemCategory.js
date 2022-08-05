import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  Entypo,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors, gStyle } from "../constants";

export default function lineItemCategory({
  icon,
  onPress,
  title,
  disableRightSide = true,
  iconLibrary = "Feather",
}) {
  let iconDisplay;
  const size = 24;
  const color = colors.greyInactive;
  switch (iconLibrary) {
    case "Feather":
      iconDisplay = <Feather name={icon} size={size} color={color} />;
      break;
    case "Entypo":
      iconDisplay = <Entypo name={icon} size={size} color={color} />;
      break;
    case "MaterialIcons":
      iconDisplay = <MaterialIcons name={icon} size={size} color={color} />;
      break;
    case "MaterialCommunityIcons":
      iconDisplay = (
        <MaterialCommunityIcons name={icon} size={size} color={color} />
      );
      break;
    case "FontAwesome":
      iconDisplay = <FontAwesome name={icon} size={size} color={color} />;
      break;
  }
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={styles.container}
    >
      <View style={gStyle.flexRowCenterAlign}>
        {iconDisplay}
        <Text style={styles.title}>{title}</Text>
      </View>

      {disableRightSide ? null : (
        <View style={styles.containerRight}>
          <Feather color={colors.greyInactive} name="chevron-right" size={20} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerRight: {
    alignItems: "flex-end",
    flex: 1,
  },
  title: {
    marginLeft: 16,
    color: colors.white,
    ...gStyle.textSpotify12,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
});
