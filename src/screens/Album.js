import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Switch,
  Alert,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import { Context } from "../context";
import { colors, device, gStyle, savedImages } from "../constants";
import { BlurView } from "expo-blur";
import LinearGradient from "../components/LinearGradient";
import Albums from "../mock/albumb";
import TouchIcon from "../components/TouchIcon";
import TouchText from "../components/TouchText";
import { Feather } from "@expo/vector-icons";
import LineItemSong from "../components/LineItemSong";

export default function Album({ navigation, route }) {
  const [downloaded, setDownloaded] = useState(false);
  const { currentSongData, showMusicBar, updateState } = useContext(Context);
  const [song, setSong] = useState(currentSongData.title);
  const { title } = route.params;
  // get main App state

  const scrollY = useRef(new Animated.Value(0)).current;

  const headingRange = device.web ? [140, 200] : [230, 280];
  const shuffelRandge = [230, 280];
  const stickyArray = device.web ? [] : [0];
  const opacityHeading = scrollY.interpolate({
    inputRange: headingRange,
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const opacityShuffle = scrollY.interpolate({
    inputRange: shuffelRandge,
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const onToggleDownloaded = (e) => {
    if (device.web) {
      setDownloaded(e);
      return;
    }

    if (e === false) {
      Alert.alert(
        "Remove from Downloads ?",
        "You won't be able to play this offline",
        [
          { text: "Cancel" },
          {
            onPress: () => {
              setDownloaded(false);
            },
            text: "Remove",
          },
        ],
        { cancelable: false }
      );
    } else {
      setDownloaded(e);
    }
  };

  const onChangeSong = (songData) => {
    setSong(songData.title);
    updateState("currentSongData", songData);
  };

  // ui state
  const album = Albums[title] || null;
  // if album data is not available
  if (!album) {
    return (
      <View style={[gStyle.container, gStyle.flexCenter]}>
        <Text
          style={[
            { color: "white", marginBottom: 15 },
            gStyle.textSpotifyBold12,
          ]}
        >{`Album: ${title}`}</Text>
        <Text style={[{ color: "red" }, gStyle.textSpotifyBold20]}>
          This Song Is Not Available Anymore
        </Text>
      </View>
    );
  }
  console.log({showMusicBar})
  return (
    <View style={gStyle.container}>
      {!showMusicBar && (
        <BlurView intensity={99} style={styles.blurview} tint="dark" />
      )}

      <View style={styles.containerHead}>
        <Animated.View
          style={[styles.headerLinear, { opacity: opacityHeading }]}
        >
          <LinearGradient height={89} fill={album?.backgroundColor} />
        </Animated.View>
        {/* Header */}
        <View style={styles.header}>
          <TouchIcon
            data={{
              icon: <Feather color={colors.white} name="chevron-left" />,
              onPress: () => navigation.goBack(),
            }}
          />
          <Animated.View style={{ opacity: opacityShuffle }}>
            <Text style={styles.headerTitle}>{album.title}</Text>
          </Animated.View>
          <TouchIcon
            data={{
              icon: <Feather color={colors.white} name="more-horizontal" />,
              onPress: () => {
                updateState("showMusicBar", true);

                return navigation.navigate("ModalMoreOptions", { album });
              },
            }}
          />
        </View>
      </View>
      <View style={styles.containerFixed}>
        <View style={styles.containerLeaner}>
          <LinearGradient fill={album.backgroundColor} />
        </View>
        <View style={styles.containerImage}>
          <Image source={savedImages[album.image]} style={styles.image} />
        </View>
        <View style={styles.containerTitle}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
        </View>
        <View style={styles.containerAlbum}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </View>
      </View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={stickyArray}
        style={styles.containerScroll}
      >
        <View style={styles.containerSticky}>
          <Animated.View
            style={[styles.containerStickyLinear, { opacity: opacityShuffle }]}
          >
            <LinearGradient fill={colors.black20} height={50} />
          </Animated.View>
          {/* shuffle button */}
          <View style={styles.containerShuffle}>
            <TouchText
              data={{
                onPress: () => null,
                style: styles.btn,
                styleText: styles.btnText,
                text: "Shuffle Play",
              }}
            />
          </View>
        </View>

        <View style={styles.containerSong}>
          <View style={styles.row}>
            <Text style={styles.downloadedText}>
              {downloaded ? "Dwonloaded" : "Download"}
            </Text>
            <Switch
              trackColor={colors.greySwitchBorder}
              value={downloaded}
              onValueChange={(e) => onToggleDownloaded(e)}
            />
          </View>

          {album?.tracks.map((track, i) => (
            <LineItemSong
              key={i}
              data={{
                onPress: onChangeSong,
                songData: {
                  album: album.title,
                  artist: album.artist,
                  image: album.image,
                  length: track.seconds,
                  title: track.title,
                },
                downloaded,
                active: song === track.title,
              }}
            />
          ))}
        </View>
        <View style={gStyle.spacer16} />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    width: "100%",
  },
  downloadedText: {
    ...gStyle.textSpotifyBold18,
    color: colors.white,
  },
  containerSong: {
    textAlign: "center",
    backgroundColor: colors.blackBg,
    minHeight: 540,
  },
  btnText: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  btn: {
    backgroundColor: colors.bradnPrimary,
    borderRadius: 25,
    height: 50,
    width: 220,
  },
  containerShuffle: {
    alignItems: "center",
    height: 50,
    shadowColor: colors.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    marginTop: 10,
  },
  containerStickyLinear: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
  containerSticky: {
    marginTop: device.iPhoneNotch ? 238 : 194,
  },
  containerScroll: {
    paddingTop: 89,
  },
  albumInfo: {
    ...gStyle.textSpotify12,
    color: colors.greyInactive,
    marginBottom: 48,
  },
  containerAlbum: {
    zIndex: device.web ? 20 : 0,
  },
  containerTitle: {
    marginTop: device.web ? 8 : 0,
    zIndex: device.web ? 20 : 0,
  },
  title: {
    ...gStyle.textSpotifyBold20,
    color: colors.white,
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: "center",
  },
  image: { height: 148, width: 148, marginBottom: device.web ? 0 : 20 },
  containerImage: {
    shadowColor: colors.black,
    shadowOffset: {
      height: 8,
      width: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    zIndex: device.web ? 20 : 0,
  },
  containerLeaner: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: device.web ? 5 : 0,
  },
  containerFixed: {
    alignItems: "center",
    position: "absolute",
    width: "100%",
    paddingTop: device.iPhoneNotch ? 94 : 60,
  },
  headerTitle: {
    ...gStyle.textSpotify16,
    color: colors.white,
    marginTop: 2,
    paddingHorizontal: 8,
    textAlign: "center",
    width: device.width - 100,
  },
  blurview: {
    ...StyleSheet.absoluteFill,
    zIndex: 101,
  },
  containerHead: {
    height: 89,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 100,
  },
  headerLinear: {
    width: "100%",
    height: 89,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: device.iPhoneNotch ? 48 : 24,
    position: "absolute",
    top: 0,
    width: "100%",
  },
});
