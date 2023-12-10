import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { colors, device, func, gStyle, savedImages } from "../constants";
import ModalHeader from "../components/ModalHeader";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context";
import TouchIcon from "../components/TouchIcon";
import Slider from "@react-native-community/slider";

export default function ModalMusicPlayer() {
  const { currentSongData } = useContext(Context);
  const [favorited, setFavorited] = useState(false);
  const [pause, setPause] = useState(false);
  const navigation = useNavigation();
  const timeLeft = func.formatTime(0);
  const timePast = func.formatTime(currentSongData.length);
  const favoriteIcon = favorited ? "heart" : "heart-o";
  const favoriteColor = favorited ? colors.bradnPrimary : colors.white;
  const iconPlay = pause ? "pause-circle" : "play-circle";
  return (
    <View>
      <Text>Modal Music player</Text>
      {/* <ModalHeader
        data={{
          left: <Feather name="chevron-down" color={colors.greyLight} />,
          leftPress: () => navigation.goBack(),
          right: <Feather name="more-horizontal" color={colors.greyLight} />,
          text: currentSongData.album,
        }}
      /> */}

      {/* <View style={gStyle.p3}>
        <Image source={savedImages[currentSongData.image]} style={styles.image} />

        <View style={[gStyle.flexRowSpace, styles.containerDetails]}>
          <View style={styles.containerSong}>
            <Text style={styles.song} ellipsizeMode="tail" numberOfLines={1}>
              {currentSongData.title}
            </Text>
            <Text style={styles.artist}>{currentSongData.artist}</Text>
          </View>

          <View style={styles.containerFavorite}>
            <TouchIcon
              data={{
                icon: <FontAwesome name={favoriteIcon} color={favoriteColor} />,
                onPress: () => setFavorited(!favorited),
              }}
            />
          </View>
        </View>

        <View style={styles.containerVolume}>
          <Slider
            minimumValue={0}
            maximumValue={currentSongData.length}
            minimumTrackTintColor={colors.white}
            maximumTrackTintColor={colors.grey}
          />

          <View style={styles.containerTime}>
            <Text style={styles.time}>{timePast}</Text>
            <Text style={styles.time}>{`-${timeLeft}`}</Text>
          </View>
        </View>

        <View style={styles.containerControl}>
          <TouchIcon
            data={{
              icon: <Feather name="shuffle" color={colors.greyLight} />,
            }}
          />
          <View style={gStyle.flexRowCenterAlign}>
            <TouchIcon
              data={{
                icon: <FontAwesome name="step-backward" color={colors.white} />,
                iconSize: 32,
              }}
            />
            <View style={gStyle.pH3}>
              <TouchIcon
                data={{
                  iconSize: 64,
                  icon: <FontAwesome name={iconPlay} color={colors.white} />,
                  onPress: () => setPause(!pause),
                }}
              />
            </View>
            <TouchIcon
              data={{
                icon: <FontAwesome name="step-forward" color={colors.white} />,
                iconSize: 32,
              }}
            />
          </View>
          <TouchIcon
            data={{ icon: <Feather name="repeat" color={colors.greyLight} /> }}
          />
        </View>

        <View style={styles.containerBottom}>
          <TouchIcon
            data={{
              icon: <Feather color={colors.greyLight} name="speaker" />,
              iconSize: 20,
            }}
          />
          <TouchIcon
            data={{
              icon: (
                <MaterialIcons name="playlist-play" color={colors.greyLight} />
              ),
              iconSize: 25,
            }}
          />
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerBottom: {
    ...gStyle.flexRowSpace,
    marginTop: device.iPhoneNotch ? 24 : 15,
  },
  containerControl: {
    ...gStyle.flexRowSpace,
    marginTop: device.iPhoneNotch ? 32 : 15,
  },
  time: {
    ...gStyle.textSpotify10,
    color: colors.greyInactive,

    ...gStyle.pH2,
  },
  containerTime: {
    ...gStyle.flexRowSpace,
  },
  containerVolume: {
    ...gStyle.p1,
    marginTop: device.iPhoneNotch ? 32 : 15,
  }, // will come back to this
  containerFavorite: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },
  containerSong: {
    flex: 6,
  },
  artist: {
    ...gStyle.textSpotify18,
    color: colors.greyInactive,
  },
  song: {
    ...gStyle.textSpotifyBold24,
    color: colors.white,
  },
  containerDetails: {
    marginBottom: 16,
  },
  image: {
    width: device.width - 48,
    height: device.width - 48,
    marginVertical: device.iPhoneNotch ? 36 : 8,
  },
});
