import { View, Text } from "react-native";
import React from "react";
import { Button } from "native-base";

export default function ForgotPassword({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text>forgotPasswoP</Text>

      <Button onPress={() => navigation.navigate('OtpSreen')} className="mt-8">OtpSreen</Button>
      <Button onPress={() => navigation.goBack()} className="mt-8">Back</Button>

    </View>
  );
}
