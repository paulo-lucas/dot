import React from 'react';
import {Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Text>ola</Text>
    </PaperProvider>
  );
}

export default App;
