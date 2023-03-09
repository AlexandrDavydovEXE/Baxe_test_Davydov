import {NativeBaseProvider} from 'native-base';
import BottomNav from './src/components/BottomNav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Test</Text>
    </View>
    // <NativeBaseProvider>
    //   <NavigationContainer>
    //     <BottomNav />
    //   </NavigationContainer>
    // </NativeBaseProvider>
  );
}
export default App;
