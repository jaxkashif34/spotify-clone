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
  mL1: { marginBottom: space1 },
  mL2: { marginBottom: space2 },
  mL3: { marginBottom: space3 },
  // right
  mR1: { marginBottom: space1 },
  mR2: { marginBottom: space2 },
  mR3: { marginBottom: space3 },
  // top
  mTHalf: { marginTop: spaceHalf },
  mT1: { marginBottom: space1 },
  mT2: { marginBottom: space2 },
  mT3: { marginBottom: space3 },
  //   horizontal
  mH1: { marginBottom: space1 },
  mH2: { marginBottom: space2 },
  mH3: { marginBottom: space3 },

  //   vertical
  mV1: { marginBottom: space1 },
  mV2: { marginBottom: space2 },
  mV3: { marginBottom: space3 },

  //   padding

  pHalf: { padding: spaceHalf },

  //   all sides
  p1: { marginBottom: space1 },
  p2: { marginBottom: space2 },
  p3: { marginBottom: space3 },

  //   top
  pT1: { marginBottom: space1 },
  pT2: { marginBottom: space2 },
  pT3: { marginBottom: space3 },
  //   right
  pR1: { marginBottom: space1 },
  pR2: { marginBottom: space2 },
  pR3: { marginBottom: space3 },

  //   bottom
  pB1: { marginBottom: space1 },
  pB2: { marginBottom: space2 },
  pB3: { marginBottom: space3 },

  //   left
  pL1: { marginBottom: space1 },
  pL2: { marginBottom: space2 },
  pL3: { marginBottom: space3 },

  //   horizontal

  pHHlaf: { paddingHorizontal: spaceHalf },
  pH1: { paddingHorizontal: space1 },
  pH2: { paddingHorizontal: space2 },
  pH3: { paddingHorizontal: space3 },
};
