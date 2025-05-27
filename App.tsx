import React from 'react';
import { Text, View } from 'react-native';
import AppStatusBar from './src/components/AppStatusBar';

function App() {

  return (
    <AppStatusBar>
      <Text style={{margin: 40, fontSize: 20}}>Posts</Text>
    </AppStatusBar>
  );

}

export default App;