import { Platform, Dimensions } from "react-native";

const android = Platform.OS === "android"; // Android
const iOS = Platform.OS === "ios"; // iOS
const web = Platform.OS === "web"; // web browser
const windoInfo = Dimensions.get("window"); // windo info

const { height, width } = windoInfo; // destrcturing height and width
const aspectRatio = height / width; // aspectRatio

// is iPhone with notch ?

let iPhoneNotch = false;

if (iOS) {
  if (height === 812 || height === 844 || height === 896 || height === 926) {
    iPhoneNotch = true;
  }
}

export default {
  android,
  aspectRatio,
  height,
  iOS,
  iPhoneNotch,
  web,
  width,
};
