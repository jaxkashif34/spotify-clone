import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { device, gStyle } from "../constants";
import ScreenHeader from "../components/ScreenHeader";
import yourLibrary from "../mock/menuYourLibrary.json";
import LineItemCategory from "../components/lineItemCategory";
export default function Library() {
  return (
    <View style={gStyle.container}>
      <View style={styles.containerHeader}>
        <ScreenHeader title="Your Library" />
      </View>

      <FlatList
        data={yourLibrary}
        contentContainerStyle={styles.containerFlatList}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <LineItemCategory
            icon={item.icon}
            onPress={() => null}
            title={item.title}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
  },
  containerFlatList: {
    marginTop: device.iPhoneNotch ? 88 : 64,
  },
});
