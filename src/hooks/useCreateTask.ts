import Realm from 'realm';
import {useRealm} from '@src/db/realm';

export default () => {
  const realm = useRealm();
  return () => {
    realm.write(() => {
      realm.create('Task', {
        content: 'TESTE',
        date: new Date(),
        _id: new Realm.BSON.ObjectId(),
      });
    });
  };
};
