import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { colors, device, gStyle } from "../constants";
import SvgSearch from "../icons";
import { searchBar } from "../icons/Paths";
import browseAll from "../mock/searchBrowseAll.json";
import PlaylistItem from "../components/playListItem";
import TouchIcon from "../components/TouchIcon";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const searchStart = device.width - 48;
  const searchEnd = device.width - 88;
  const opacity = scrollY.interpolate({
    inputRange: [0, 48],
    outputRange: [searchStart, searchEnd],
    extrapolate: "clamp",
  });
  return (
    <>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        style={gStyle.container}
      >
        <View style={gStyle.spacer11} />

        <View style={styles.containerSearchBar}>
          <Animated.View style={{ width: opacity }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => null}
              style={styles.searchPlaceHolder}
            >
              <View style={gStyle.mR1}>
                <SvgSearch path={searchBar} fillColor={colors.blackBg} />
              </View>

              <Text style={styles.searchPlaceHolderText}>
                Artists, songs or podcasts
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Text style={styles.sectionHeading}>You Top Geners</Text>

        <View style={styles.containerRow}>
          {Object.keys(browseAll).map((index) => {
            const item = browseAll[index];
            return (
              <View key={item.id} style={styles.containercolumn}>
                <PlaylistItem
                  data={{
                    onPress: () => null,
                    bgColor: item.color,
                    title: item.title,
                  }}
                />
              </View>
            );
          })}
        </View>

        <Text style={styles.sectionHeading}>Browse all</Text>
        <View style={styles.containerRow}>
          {Object.keys(browseAll).map((index) => {
            const item = browseAll[index];
            return (
              <View key={item.id} style={styles.containercolumn}>
                <PlaylistItem
                  data={{
                    onPress: () => null,
                    bgColor: item.color,
                    title: item.title,
                  }}
                />
              </View>
            );
          })}
        </View>
      </Animated.ScrollView>

      <View style={styles.iconRight}>
        <TouchIcon
          data={{
            onPress: () => null,
            icon: <FontAwesome name="microphone" color={colors.white} />,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  iconRight: {
    alignItems: "center",
    height: 28,
    width: 28,
    justifyContent: "center",
    position: "absolute",
    right: 24,
    top: device.web ? 40 : 78,
  },
  containerRow: {
    ...gStyle.flex1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 24,
  },
  sectionHeading: {
    ...gStyle.textSpotifyBold18,
    color: colors.white,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16,
  },

  searchPlaceHolderText: {
    ...gStyle.textSpotify16,
    color: colors.greyInactive,
    marginLeft: 10,
  },
  searchPlaceHolder: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 6,
    flexDirection: "row",
    paddingLeft: 16,
    paddingVertical: 16,
  },
  containerSearchBar: {
    ...gStyle.pH3,
    backgroundColor: colors.blackBg,
    paddingBottom: 16,
    paddingTop: device.iPhoneNotch ? 64 : 24,
  },
});
