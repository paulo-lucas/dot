import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Navigator from '@src/components/Navigator';
import useQueryTasks from '@src/hooks/useQueryTasks';

const Todo: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const tasks = useQueryTasks();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasks}>
        <Text>{tasks.toString()}</Text>
      </View>
      <Navigator date={date} setDate={setDate} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  tasks: {flexGrow: 1},
});

export default Todo;
