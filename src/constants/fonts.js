import Device from './device';

export default {
  spotifyLight: 'spotifyLight',
  spotifyRegular: 'spotifyRegular',
  spotifyBold: 'spotifyBold',

  bold: Device.iOS ? 'HelveticaNeue-Bold' : 'sans-serif-condensed',
  light: Device.iOS ? 'HelveticaNeue-Light' : 'sans-serif-light',
  medium: Device.iOS ? 'HelveticaNeue-Medium' : 'sans-serif-medium',
  regular: Device.iOS ? 'HelveticaNeue' : 'sans-serif',
};
