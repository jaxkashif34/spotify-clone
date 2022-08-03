import { View, Animated, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { colors, device, gStyle } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import AlbumbsHorizontal from "../components/AlbumbsHorizontal";
import recentlyPlayed from "../mock/recentlyPlayed.json";
import heavyRotation from "../mock/heavyRotation.json";
import jumpBackIn from "../mock/jumpBackIn.json";

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const fadeIn = scrollY.interpolate({
    inputRange: [0, 128],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const fadeOut = scrollY.interpolate({
    inputRange: [0, 88],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <>
      {/* {console.log(device.iPhoneNotch)} */}
      {device.iPhoneNotch && (
        <Animated.View style={[styles.iPhoneNotch, { opacity: fadeIn }]} />
      )}

      <Animated.View style={[styles.containerHeader, { opacity: fadeOut }]}>
        <FontAwesome color={colors.white} name="cog" size={28} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        style={gStyle.container}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View style={gStyle.spacer16} />

        <AlbumbsHorizontal data={recentlyPlayed} heading="Recently played" />

        <AlbumbsHorizontal
          data={heavyRotation}
          heading="Your Heavy Rotation"
          tagline="The music you've had on repeat this month."
        />
        <AlbumbsHorizontal
          data={jumpBackIn}
          heading="Jump back in"
          tagline="Your top listens from the past few months."
        />
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  iPhoneNotch: {
    backgroundColor: colors.black70,
    height: 44,
    width: "100%",
    position: "absolute",
    zIndex: 20,
    top: 0,
  },
  containerHeader: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingTop: device.iPhoneNotch ? 60 : 36,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
  },
});
