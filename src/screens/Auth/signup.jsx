import { Button } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text>SignupScreen</Text>

      <Button onPress={() => navigation.navigate('ForgotPasswordScreen')} className="mt-8">ForgotPasswordScreen</Button>
      <Button onPress={() => navigation.goBack()} className="mt-8">Back</Button>

    </View>
  );
}
