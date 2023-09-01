import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {RealmProvider} from '@src/db/realm';

import Todo from '@src/views/Todo';

function App(): JSX.Element {
  return (
    <RealmProvider>
      <PaperProvider>
        <Todo />
      </PaperProvider>
    </RealmProvider>
  );
}

export default App;
