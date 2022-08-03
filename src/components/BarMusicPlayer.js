import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors, device, gStyle } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";

export default function BarMusicPlayer({ song }) {
  const navigation = useNavigation();
  const [favorited, setfavorited] = useState(false);
  const [paused, setPaused] = useState(true);

  const favoriteIcon = favorited ? "heart" : "heart-o";
  const favoriteColor = favorited ? colors.bradnPrimary : colors.white;
  const iconPlay = paused ? "play-circle" : "pause-circle";
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate("ModalMusicPlayer")}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        hitSlop={{ bottom: 10, right: 10, left: 10, top: 10 }}
        onPress={() => setfavorited(!favorited)}
        style={styles.containerIcon}
      >
        <FontAwesome name={favoriteIcon} size={20} color={favoriteColor} />
      </TouchableOpacity>

      {song && (
        <View>
          <View style={styles.containerSong}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={[gStyle.flexCenter, gStyle.mTHalf]}>
            <FontAwesome
              size={14}
              name="bluetooth-b"
              color={colors.bradnPrimary}
            />

            <Text style={styles.device}>Caleb&apos;s Beatsx</Text>
          </View>
        </View>
      )}

      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        onPress={() => setPaused(!paused)}
        style={styles.containerIcon}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <FontAwesome color={colors.white} name={iconPlay} size={28} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

BarMusicPlayer.defaultProps = {
  song: null,
};
BarMusicPlayer.propTypes = {
  song: PropTypes.shape({
    artist: PropTypes.string,
    title: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: colors.grey,
    borderBottomColor: colors.blackBg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
    paddingVertical: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerSong: {
    ...gStyle.flexRowCenter,
    overflow: "hidden",
    width: device.width - 100,
  },
  title: {
    color: colors.white,
    ...gStyle.textSpotify12,
    marginRight: 4,
  },
  artist: {
    ...gStyle.textSpotify12,
    color: colors.greyLight,
  },
  device: {
    ...gStyle.textSpotify10,
    color: colors.bradnPrimary,
    marginLeft: 4,
    textTransform: "uppercase",
  },
  containerIcon: {
    ...gStyle.flexCenter,
    width: 50,
  },
});
