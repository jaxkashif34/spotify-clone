import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors, gStyle } from "../constants";

export default function playListItem({ data: { onPress, title, bgColor } }) {
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={[styles.playlistItem, { backgroundColor: bgColor }]}
    >
      <Text style={styles.playlistTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  playlistItem: {
    borderRadius: 6,
    ...gStyle.flex1,
    height: 70,
    marginBottom: 24,
    marginRight: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
  },

  playlistTitle: {
    ...gStyle.textSpotifyBold22,
    color: colors.white,
  },
});
