import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { gStyle } from "../constants";
import PropTypes, { number } from "prop-types";
export default function TouchText({ data }) {
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      onPress={data?.onPress}
      style={[gStyle.flexCenter, data?.style]}
    >
      <Text style={data?.styleText}>{data?.text}</Text>
    </TouchableOpacity>
  );
}

TouchText.propTypes = {
  data: PropTypes.shape({
    // required
    onPress: PropTypes.func,
    text: PropTypes.string,

    // optionals
    style: PropTypes.shape({
      backgroundColor: PropTypes.string,
      borderRadius: PropTypes.number,
      height: PropTypes.number,
      width: PropTypes.number,
    }),
    styleText: PropTypes.shape({
      color: PropTypes.string,
      letterSpacing: PropTypes.number,
      textTransform: PropTypes.string,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  }),
};
