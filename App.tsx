import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './src/features/navigation/RootStack';
import {StoreProvider} from './src/shared';

function App(): React.JSX.Element {
  return (
    <StoreProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
