import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Navigator from '@src/components/Navigator';

const Todo: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text>Home</Text>
      </View>
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  tasks: {flexGrow: 1},
});

export default Todo;
