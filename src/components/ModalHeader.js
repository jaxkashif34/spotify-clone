import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, device, gStyle } from "../constants";
import TouchIcon from "./TouchIcon";
export default function ModalHeader({ data }) {
  const { left, right, text, leftPress, rightPress } = data;
  return (
    <View style={[styles.container]}>
      {left ? (
        <TouchIcon
          data={{
            style: styles.left,
            icon: left,
            onPress: leftPress,
          }}
        />
      ) : (
        <View style={styles.left} />
      )}

      {text && (
        <View style={styles.containerText}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}

      {right ? (
        <TouchIcon
          data={{
            icon: right,
            onPress: () => rightPress,
            style: styles.right,
          }}
        />
      ) : (
        <View style={styles.right} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  right: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    textAlign: "center",
    ...gStyle.textSpotifyBold16,
  },

  containerText: {
    alignItems: "center",
    ...gStyle.flex5,
    justifyContent: "center",
  },
  left: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: device.iPhoneNotch ? 48 : 24,
  },
});
