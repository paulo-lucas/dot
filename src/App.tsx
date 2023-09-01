import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {RealmProvider} from '@src/db/realm';
import useTheme from '@src/hooks/useTheme';

import Todo from '@src/views/Todo';

function App(): JSX.Element {
  const paperTheme = useTheme();
  return (
    <RealmProvider>
      <PaperProvider theme={paperTheme}>
        <Todo />
      </PaperProvider>
    </RealmProvider>
  );
}

export default App;
