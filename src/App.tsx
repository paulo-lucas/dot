import React from 'react';
import {PaperProvider} from 'react-native-paper';

import Todo from '@src/views/Todo';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Todo />
    </PaperProvider>
  );
}

export default App;
