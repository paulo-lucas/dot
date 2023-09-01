import React from 'react';
import useQueryTasks from '@src/hooks/useQueryTasks';
import {Text} from 'react-native-paper';

interface TasksProps {
  date: Date;
  showChecked: boolean;
}

const Tasks: React.FC<TasksProps> = ({date, showChecked}) => {
  const list = useQueryTasks(date, showChecked);

  return (
    <>
      {list.map(task => (
        <Text key={task._id.toString()}>{JSON.stringify(task.toJSON())}</Text>
      ))}
    </>
  );
};

export default Tasks;
