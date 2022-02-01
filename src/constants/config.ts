import {Platform, PlatformIOSStatic} from 'react-native';

// it will only render 1 columns for iPhone and 3 columns for iPad
var numberOfColumns = 1;
if (Platform.OS === 'ios') {
  const platformIOS = Platform as PlatformIOSStatic;
  numberOfColumns = platformIOS.isPad ? 3 : 1;
}

// in order to support landscape mode we need to multiple number of columns for iphone
const config = {
  minYear: 1900,
  maxYear: 2022,
  numberOfColumns,
  server: 'https://raw.githubusercontent.com/',
};
export default config;
