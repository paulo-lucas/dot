import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import NavigatorButtons from '@src/components/NavigatorButtons';

const Navigator: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Aug 32, 2023</Text>
      <NavigatorButtons />
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
