import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import NavigatorButtons from '@src/components/NavigatorButtons';
import {isToday} from '@src/utils/date';

interface NavigatorProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Navigator: React.FC<NavigatorProps> = ({date, setDate}) => {
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#a0b2a655',
  },
});

export default Navigator;
