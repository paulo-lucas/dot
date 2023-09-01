import Realm from 'realm';

class Task extends Realm.Object<Task> {
  _id!: Realm.BSON.ObjectId;
  name!: string;

  static schema = {
    name: 'Task',
    properties: {
      _id: 'objectId',
      content: 'string',
      date: 'date',
      checked: 'bool',
    },
    primaryKey: '_id',
  };
}

export default Task;
