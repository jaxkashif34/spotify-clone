import { View, Text, Animated } from "react-native";
import React, { useRef } from "react";

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Text>Home</Text>
    </>
  );
}
