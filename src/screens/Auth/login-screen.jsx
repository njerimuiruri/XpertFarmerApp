import { Button } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text>LoginScreen</Text>
      <Button onPress={() => navigation.navigate('SignupScreen')} className="mt-8">Register</Button>
    </View>
  );
}
