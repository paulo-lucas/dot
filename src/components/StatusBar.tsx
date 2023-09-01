import React from 'react';
import {StatusBar as RNStatusBar, useColorScheme} from 'react-native';
import {useTheme} from 'react-native-paper';

const StatusBar: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const theme = useTheme();

  return (
    <RNStatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={
        isDarkMode ? theme.colors.surface : theme.colors.surfaceVariant
      }
    />
  );
};

export default StatusBar;
