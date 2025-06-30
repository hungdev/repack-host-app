import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './src/features/navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
