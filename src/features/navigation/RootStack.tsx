import React, {Suspense} from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../home/screens';

const Stack = createNativeStackNavigator();
const MiniApp = React.lazy(() => import('MiniApp/App'));
const AuthMiniApp = React.lazy(() => import('AuthMiniApp/App'));

const RootStack = () => {
  return (
    <Suspense fallback={<Text>Loading</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MiniApp" component={MiniApp} />
        <Stack.Screen name="AuthMiniApp" component={AuthMiniApp} />
      </Stack.Navigator>
    </Suspense>
  );
};

export default RootStack;
