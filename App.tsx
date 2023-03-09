import {NativeBaseProvider} from 'native-base';
import BottomNav from './src/components/BottomNav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;
