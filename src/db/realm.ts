import Realm from 'realm';
import {createRealmContext} from '@realm/react';

import Task from './schemas/Task';

const realmConfig: Realm.Configuration = {
  schema: [Task],
};

export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);
