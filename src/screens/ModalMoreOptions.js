import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { colors, device, fonts, gStyle, images } from "../constants";
import { Context } from "../context";
import { useNavigation } from "@react-navigation/native";
import LineItemCategory from "../components/lineItemCategory";
import moreOptions from "../mock/menuMoreOptions.json";

export default function ModalMoreOptions({ route }) {
  const navigation = useNavigation();
  const { updateState, showMusicBar } = useContext(Context);
  const { album } = route.params;
  useEffect(() => {
    return () => {
      updateState("showMusicBar", true);
    };
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={[gStyle.flex1, gStyle.pB3]}
        showsVerticalScrollIndicator={false}
        style={[gStyle.container, styles.transparent]}
      >
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image source={images[album.image]} style={styles.image} />
          </View>

          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
          <Text style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </View>

        {Object.keys(moreOptions).map((index) => {
          const item = moreOptions[index];
          return (
            <LineItemCategory
              icon={item.icon}
              key={item.id}
              disableRightSide={false}
              iconLibrary={item.lib}
              onPress={() => null}
              title={item.title}
            />
          );
        })}
      </ScrollView>

      <SafeAreaView style={styles.containerSafeArea}>
        <TouchableWithoutFeedback
          onPress={() => {
            updateState("showMusicBar", !showMusicBar);
            navigation.goBack();
          }}
        >
          <View style={styles.containerButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  albumInfo: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12,
    marginBottom: 48,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 20,
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: "center",
  },
  image: { height: 148, width: 148, marginBottom: 16 },
  containerImage: {
    shadowColor: colors.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  container: {
    alignItems: "center",
    paddingTop: device.iPhoneNotch ? 94 : 50,
  },
  transparent: { backgroundColor: colors.backBlur },
  buttonText: {
    fontSize: 18,
    color: colors.white,
    ...gStyle.textSpotify18,
  },
  containerButton: {
    ...gStyle.flexCenter,
    ...gStyle.spacer6,
  },
  containerSafeArea: {
    backgroundColor: colors.backBlur,
  },
});
