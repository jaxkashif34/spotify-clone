import { TouchableOpacity } from "react-native";
import React, { cloneElement } from "react";
import { gStyle } from "../constants";
import PropTypes from "prop-types";

export default function TouchIcon({ data }) {
  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={data?.onPress}
      hitSlop={{ top: 5, bottom: 5, right: 5, left: 5 }}
      style={[gStyle.flexCenter, data?.style]}
    >
      {cloneElement(data?.icon, { size: data?.iconSize })}
    </TouchableOpacity>
  );
}

TouchIcon.propTypes = {
  data: PropTypes.shape({
    // required
    icon: PropTypes.element.isRequired,
    onPress: PropTypes.func.isRequired,

    // optional
    iconSize: PropTypes.number,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.object,
    ]),
  }),
};
