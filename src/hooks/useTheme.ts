import {useColorScheme} from 'react-native';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

const lightColors = {
  primary: 'rgb(0, 102, 134)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(192, 232, 255)',
  onPrimaryContainer: 'rgb(0, 30, 43)',
  secondary: 'rgb(0, 105, 112)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(121, 244, 255)',
  onSecondaryContainer: 'rgb(0, 32, 34)',
  tertiary: 'rgb(174, 49, 13)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(255, 219, 209)',
  onTertiaryContainer: 'rgb(60, 8, 0)',
  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: 'rgb(251, 252, 254)',
  onBackground: 'rgb(25, 28, 30)',
  surface: 'rgb(251, 252, 254)',
  onSurface: 'rgb(25, 28, 30)',
  surfaceVariant: 'rgb(220, 227, 233)',
  onSurfaceVariant: 'rgb(64, 72, 76)',
  outline: 'rgb(113, 120, 125)',
  outlineVariant: 'rgb(192, 199, 205)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(46, 49, 51)',
  inverseOnSurface: 'rgb(240, 241, 243)',
  inversePrimary: 'rgb(112, 210, 255)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(238, 245, 248)',
    level2: 'rgb(231, 240, 244)',
    level3: 'rgb(223, 236, 241)',
    level4: 'rgb(221, 234, 240)',
    level5: 'rgb(216, 231, 237)',
  },
  surfaceDisabled: 'rgba(25, 28, 30, 0.12)',
  onSurfaceDisabled: 'rgba(25, 28, 30, 0.38)',
  backdrop: 'rgba(42, 49, 54, 0.4)',
};

const darkColors = {
  primary: 'rgb(112, 210, 255)',
  onPrimary: 'rgb(0, 53, 71)',
  primaryContainer: 'rgb(0, 77, 102)',
  onPrimaryContainer: 'rgb(192, 232, 255)',
  secondary: 'rgb(77, 217, 228)',
  onSecondary: 'rgb(0, 54, 58)',
  secondaryContainer: 'rgb(0, 79, 84)',
  onSecondaryContainer: 'rgb(121, 244, 255)',
  tertiary: 'rgb(255, 180, 161)',
  onTertiary: 'rgb(97, 19, 0)',
  tertiaryContainer: 'rgb(136, 31, 0)',
  onTertiaryContainer: 'rgb(255, 219, 209)',
  error: 'rgb(255, 180, 171)',
  onError: 'rgb(105, 0, 5)',
  errorContainer: 'rgb(147, 0, 10)',
  onErrorContainer: 'rgb(255, 180, 171)',
  background: 'rgb(25, 28, 30)',
  onBackground: 'rgb(225, 226, 229)',
  surface: 'rgb(25, 28, 30)',
  onSurface: 'rgb(225, 226, 229)',
  surfaceVariant: 'rgb(64, 72, 76)',
  onSurfaceVariant: 'rgb(192, 199, 205)',
  outline: 'rgb(138, 146, 151)',
  outlineVariant: 'rgb(64, 72, 76)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(225, 226, 229)',
  inverseOnSurface: 'rgb(46, 49, 51)',
  inversePrimary: 'rgb(0, 102, 134)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(29, 37, 41)',
    level2: 'rgb(32, 43, 48)',
    level3: 'rgb(35, 48, 55)',
    level4: 'rgb(35, 50, 57)',
    level5: 'rgb(37, 54, 62)',
  },
  surfaceDisabled: 'rgba(225, 226, 229, 0.12)',
  onSurfaceDisabled: 'rgba(225, 226, 229, 0.38)',
  backdrop: 'rgba(42, 49, 54, 0.4)',
};

export default () => {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark'
    ? {...MD3DarkTheme, colors: darkColors}
    : {...MD3LightTheme, colors: lightColors};
};