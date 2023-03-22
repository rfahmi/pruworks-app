import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import RootStack from './src/configs/navigation/RootStack';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/configs/redux';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
