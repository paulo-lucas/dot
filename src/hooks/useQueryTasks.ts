import {useQuery} from '@src/db/realm';
import TaskSchema from '@src/db/schemas/Task';

export default () => useQuery(TaskSchema);
