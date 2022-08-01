import { iOS } from "./device";

export default {
  spotifyLight: "spotifyLight",
  spotifyRegular: "spotifyRegular",
  spotifyBold: "spotifyBold",

  bold: iOS ? "HelveticaNeue-Bold" : "sans-serif-condensed",
  light: iOS ? "HelveticaNeue-Light" : "sans-serif-light",
  medium: iOS ? "HelveticaNeue-Medium" : "sans-serif-medium",
  regular: iOS ? "HelveticaNeue" : "sans-serif",
};
