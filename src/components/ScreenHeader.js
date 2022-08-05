import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import TouchIcon from "../components/TouchIcon";
import { Feather } from "@expo/vector-icons";
import { colors, device, gStyle } from "../constants";
export default function ScreenHeader({ showBack = false, title }) {
  const navigation = useNavigation();
  return (
    <BlurView tint="dark" intensity={95} style={styles.container}>
      {showBack && (
        <View style={styles.left}>
          <TouchIcon
            data={{
              icon: <Feather name="chevron-left" color={colors.white} />,
              onPress: () => navigation.goBack(),
            }}
          />
        </View>
      )}

      <View style={styles.containerText}>
        <Text style={styles.text}>{title}</Text>
      </View>

      {showBack && <View style={gStyle.flex1} />}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    ...gStyle.flex5,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    ...gStyle.textSpotifyBold16,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: device.iPhoneNotch ? 48 : 24,
  },
  left: { ...gStyle.flex1, alignItems: "flex-start" },
});
