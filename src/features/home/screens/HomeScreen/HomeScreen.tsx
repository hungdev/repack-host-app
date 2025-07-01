import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../../../store/userSlice';

// const LoginScreen = React.lazy(() => import('AuthMiniApp/Login'));

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state);

  console.log('state', state);

  return (
    <View style={styles.container}>
      <Text>Home screen </Text>
      <Button
        title="Child app"
        onPress={() => navigation.navigate('MiniApp')}
      />
      <Button
        title="Child Auth app"
        onPress={() => navigation.navigate('AuthMiniApp')}
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
