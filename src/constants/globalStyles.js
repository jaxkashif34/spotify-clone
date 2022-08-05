import colors from "./colors";
import fonts from "./fonts";

const sapaceGrid = 8;

const spaceHalf = Math.ceil(sapaceGrid / 2);

const space1 = sapaceGrid;
const space2 = sapaceGrid * 2;
const space3 = sapaceGrid * 3;
const space4 = sapaceGrid * 4;
const space6 = sapaceGrid * 6;
const space8 = sapaceGrid * 8;
const space11 = sapaceGrid * 11;
const space16 = sapaceGrid * 16;

export default {
  activeOpacity: 0.7,

  container: {
    backgroundColor: colors.blackBg,
    flex: 1,
  },

  containerAbsoulte: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 50,
  },

  //   flex

  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },

  flexRow: {
    flexDirection: "row",
  },
  flexRowCenterAlign: {
    flexDirection: "row",
    alignItems: "center",
  },

  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  flexRowSpace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex5: { flex: 5 },
  flex4: { flex: 4 },

  //   text

  textSpotify10: { fontFamily: fonts.spotifyRegular, fontSize: 10 },
  textSpotify12: { fontFamily: fonts.spotifyRegular, fontSize: 12 },
  textSpotify14: { fontFamily: fonts.spotifyRegular, fontSize: 14 },
  textSpotify16: { fontFamily: fonts.spotifyRegular, fontSize: 16 },
  textSpotify18: { fontFamily: fonts.spotifyRegular, fontSize: 18 },
  textSpotifyBold12: { fontFamily: fonts.spotifyBold, fontSize: 12 },
  textSpotifyBold16: { fontFamily: fonts.spotifyBold, fontSize: 16 },
  textSpotifyBold18: { fontFamily: fonts.spotifyBold, fontSize: 18 },
  textSpotifyBold20: { fontFamily: fonts.spotifyBold, fontSize: 20 },
  textSpotifyBold22: { fontFamily: fonts.spotifyBold, fontSize: 22 },
  textSpotifyBold24: { fontFamily: fonts.spotifyBold, fontSize: 24 },

  //   spacers

  spacer1: { height: space1 },
  spacer2: { height: space2 },
  spacer3: { height: space3 },
  spacer4: { height: space4 },
  spacer6: { height: space6 },
  spacer8: { height: space8 },
  spacer11: { height: space11 },
  spacer16: { height: space16 },

  //   margins
  // bottom
  mB1: { marginBottom: space1 },
  mB2: { marginBottom: space2 },
  mB3: { marginBottom: space3 },
  // left
  mL1: { marginLeft: space1 },
  mL2: { marginLeft: space2 },
  mL3: { marginLeft: space3 },
  // right
  mR1: { marginLeft: space1 },
  mR2: { marginLeft: space2 },
  mR3: { marginLeft: space3 },
  // top
  mTHalf: { marginTop: spaceHalf },
  mT1: { marginTop: space1 },
  mT2: { marginTop: space2 },
  mT3: { marginTop: space3 },
  //   horizontal
  mH1: { marginHorizontal: space1 },
  mH2: { marginHorizontal: space2 },
  mH3: { marginHorizontal: space3 },

  //   vertical
  mV1: { marginVertical: space1 },
  mV2: { marginVertical: space2 },
  mV3: { marginVertical: space3 },

  //   padding

  pHalf: { padding: spaceHalf },

  //   all sides
  p1: { padding: space1 },
  p2: { padding: space2 },
  p3: { padding: space3 },

  //   top
  pT1: { paddingTop: space1 },
  pT2: { paddingTop: space2 },
  pT3: { paddingTop: space3 },
  //   right
  pR1: { paddingRight: space1 },
  pR2: { paddingRight: space2 },
  pR3: { paddingRight: space3 },

  //   bottom
  pB1: { paddingBottom: space1 },
  pB2: { paddingBottom: space2 },
  pB3: { paddingBottom: space3 },

  //   left
  pL1: { paddingLeft: space1 },
  pL2: { paddingLeft: space2 },
  pL3: { paddingLeft: space3 },

  //   horizontal

  pHHlaf: { paddingHorizontal: spaceHalf },
  pH1: { paddingHorizontal: space1 },
  pH2: { paddingHorizontal: space2 },
  pH3: { paddingHorizontal: space3 },
};
