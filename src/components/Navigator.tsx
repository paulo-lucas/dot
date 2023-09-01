import React from 'react';
import {View, StyleSheet, useColorScheme, ColorSchemeName} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import NavigatorButtons from '@src/components/NavigatorButtons';
import {isToday} from '@src/utils/date';
import {MD3Theme} from 'react-native-paper/lib/typescript/types';

interface NavigatorProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Navigator: React.FC<NavigatorProps> = ({date, setDate}) => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const styles = getStyles(theme, colorScheme);
  const changeDate = (days: number) => {
    const aux = new Date(date);
    aux.setDate(aux.getDate() + days);
    setDate(aux);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">{date.toDateString()}</Text>
      <NavigatorButtons isToday={isToday(date)} changeDate={changeDate} />
    </View>
  );
};

const getStyles = (theme: MD3Theme, colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 15,
      backgroundColor:
        colorScheme === 'dark'
          ? theme.colors.surface
          : theme.colors.surfaceVariant,
    },
  });

export default Navigator;
