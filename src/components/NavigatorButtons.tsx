import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';

interface NavigatorButtonsProps {
  isToday: boolean;
  changeDate(n: number): void;
}

const NavigatorButtons: React.FC<NavigatorButtonsProps> = ({
  isToday,
  changeDate,
}) => {
  return (
    <View style={styles.container}>
      <IconButton
        size={42}
        icon="chevron-left"
        mode="outlined"
        onPress={() => changeDate(-1)}
      />

      <IconButton
        size={42}
        icon="chevron-right"
        mode="outlined"
        disabled={isToday}
        onPress={() => changeDate(1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default NavigatorButtons;
