import React from 'react';
import useQueryTasks from '@src/hooks/useQueryTasks';
import {Text} from 'react-native-paper';

interface TasksProps {
  date: Date;
}

const Tasks: React.FC<TasksProps> = ({}) => {
  const list = useQueryTasks();
  return (
    <>
      {list.map(task => (
        <Text key={task._id.toString()}>{JSON.stringify(task.toJSON())}</Text>
      ))}
    </>
  );
};

export default Tasks;
