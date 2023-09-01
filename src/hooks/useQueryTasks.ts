import {useQuery} from '@src/db/realm';
import Task from '@src/db/schemas/Task';

export default () => useQuery(Task);
