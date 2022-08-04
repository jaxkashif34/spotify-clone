import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors, gStyle } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function LineItemSong({ data }) {
  const { onPress, songData, downloaded, active } = data;
  const activeColor = active ? colors.bradnPrimary : colors.white;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={gStyle.flex5}
        onPress={() => onPress(songData)}
        activeOpacity={gStyle.activeOpacity}
      >
        <Text style={[styles.title, { color: activeColor }]}>
          {songData.title}
        </Text>

        <View style={gStyle.flexRow}>
          {downloaded && (
            <View style={styles.circleDownload}>
              <Ionicons color={colors.blackBg} name="arrow-down" size={14} />
            </View>
          )}
          <Text style={styles.artist}>{songData.artist}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.containerRight}>
        <Feather color={colors.greyLight} name="more-horizontal" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRight: {
    alignItems: "flex-end",
    flex: 1,
  },
  artist: {
    ...gStyle.textSpotify12,
    color: colors.greyInactive,
  },
  circleDownload: {
    alignItems: "center",
    backgroundColor: colors.bradnPrimary,
    borderRadius: 7,
    height: 14,
    justifyContent: "center",
    marginRight: 8,
    width: 14,
  },
  title: {
    ...gStyle.textSpotify16,
    color: colors.white,
    marginBottom: 4,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    width: "100%",
  },
});
