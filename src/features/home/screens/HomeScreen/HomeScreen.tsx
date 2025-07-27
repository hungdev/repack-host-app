import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../../../store/userSlice';
import {getReducers} from '../../../../shared/sharedStore';

// const LoginScreen = React.lazy(() => import('ChildAuthApp/Login'));

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state.user.name);
  const todos = useSelector((state: any) => state.todos?.list || []);

  console.log('state', state);

  return (
    <View style={styles.container}>
      <Text>Home screen {JSON.stringify(state)}</Text>
      <Text>Child data {JSON.stringify(todos)}</Text>
      <Button
        title="Child app"
        onPress={() => navigation.navigate('MiniApp')}
      />
      <Button
        title="setUser"
        onPress={() => {
          console.log('qqq');
          dispatch(
            setUser({name: 'Cee', email: 'hello@cee.com', isLoggedIn: true}),
          );
        }}
      />
      <Button
        title="getReducers"
        onPress={() => {
          console.log('getReducers', getReducers());
        }}
      />
      <Button
        title="setUser"
        onPress={() => {
          console.log('qqq');
          dispatch(
            setUser({name: 'Cee', email: 'hello@cee.com', isLoggedIn: true}),
          );
        }}
      />
      {/* <LoginScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
