import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './src/features/navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

import {rootSlice} from './src/store/rootSlice';

const StateManagementProvider: React.FC<{
  store: any;
  children: React.ReactNode;
}> = React.lazy(() => import('StateManagementApp/App'));
const stateManagementStore = React.lazy(
  () => import('StateManagementApp/store'),
);

function App(): React.JSX.Element {
  const injectedStore = stateManagementStore(rootSlice);
  return (
    <StateManagementProvider store={injectedStore}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </StateManagementProvider>
  );
}

export default App;
