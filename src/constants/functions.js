import { Image } from "react-native";
import { Asset } from "expo-asset";
import Font from "expo-font";

import preLoadFonts from "./preLoadFonts";
import preLoadImages from "./preLoadImages";

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const cacheImages = (images) =>
  Object.values(images).map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });

const loadAssetsAsync = () => {
  const fontsAssets = cacheFonts(preLoadFonts);
  const imagesAssets = cacheImages(preLoadImages);

  return Promise.all([...fontsAssets, ...imagesAssets]);
};

const formatTime = (sec) => {
  const padTime = (num, size) => `000${num}`.slice(size * -1);
  const time = parseFloat(sec).toFixed(3);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);
  return `${padTime(minutes, 1)}:${padTime(seconds, 2)}`;
};

export default {
  cacheFonts,
  cacheImages,
  loadAssetsAsync,
  formatTime,
};
