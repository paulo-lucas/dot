import {useQuery} from '@src/db/realm';
import TaskSchema from '@src/db/schemas/Task';

export default (date?: Date, withChecked?: boolean) => {
  const tasks = useQuery(TaskSchema);
  return tasks;
};
