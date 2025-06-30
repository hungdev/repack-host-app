import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const LoginScreen = React.lazy(() => import('AuthMiniApp/Login'));

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Child app"
        onPress={() => navigation.navigate('MiniApp')}
      />
      <Button
        title="Child Auth app"
        onPress={() => navigation.navigate('AuthMiniApp')}
      />
      <LoginScreen />
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
