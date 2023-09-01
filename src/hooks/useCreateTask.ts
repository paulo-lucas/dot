import Realm from 'realm';
import {useRealm} from '@src/db/realm';

export default () => {
  const realm = useRealm();
  return (content: string, date: Date) => {
    realm.write(() => {
      realm.create('Task', {
        content,
        date,
        checked: false,
        _id: new Realm.BSON.ObjectId(),
      });
    });
  };
};
