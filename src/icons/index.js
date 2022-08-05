import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { colors } from "../constants";

export default function SvgIcon({
  path,
  active = false,
  size = 24,
  fillRule = "evenodd",
  fillColor,
}) {
  const fill = active
    ? colors.white
    : fillColor
    ? fillColor
    : colors.greyInactive;
  return (
    <Svg height={size} width={size} viewBox="0 0 512 512">
      <Path d={path} fill={fill} fillRule={fillRule} />
    </Svg>
  );
}

SvgIcon.prototype = {
  data: {
    active: PropTypes.bool,
    path: PropTypes.string.isRequired,
  },
};
