import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';

const Buttons: React.FC = () => {
  return (
    <View style={styles.container}>
      <IconButton
        size={42}
        icon="chevron-left"
        mode="outlined"
        onPress={() => console.log('Pressed left')}
      />

      <IconButton
        size={42}
        icon="chevron-right"
        mode="outlined"
        onPress={() => console.log('Pressed right')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Buttons;
