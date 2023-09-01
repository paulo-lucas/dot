import React, {useState} from 'react';
import {ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import StatusBar from '@src/components/StatusBar';
import Navigator from '@src/components/Navigator';
import Tasks from '@src/components/Tasks';
import NewTaskModal from '@src/components/NewTaskModal';
import {MD3Theme, useTheme} from 'react-native-paper';

const Todo: React.FC = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [date, setDate] = useState<Date>(new Date());
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const onDismissModal = () => setModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.tasks}>
        <Tasks date={date} showChecked />
      </ScrollView>
      <Navigator date={date} setDate={setDate} />
      <NewTaskModal visible={modalVisible} onDismiss={onDismissModal} />
    </SafeAreaView>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: theme.colors.background},
    tasks: {flexGrow: 1},
  });

export default Todo;
