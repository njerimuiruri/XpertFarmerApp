import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { Button } from "native-base";

export default function Otp({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "white",
      }}
    >
      <View style={{ position: "absolute", top: 0, left: 0 }}>
        <Image source={require("../../assets/svg/top-left-decoration.svg")} />
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#74c474",
          marginBottom: 20,
        }}
      >
        OTP
      </Text>
      <Text style={{ fontSize: 14, marginBottom: 10, color: "black" }}>
        Enter OTP sent to your Phone number
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#e5f3e5",
            textAlign: "center",
            borderRadius: 8,
            fontSize: 18,
            marginRight: 10,
          }}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#e5f3e5",
            textAlign: "center",
            borderRadius: 8,
            fontSize: 18,
            marginRight: 10,
          }}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#e5f3e5",
            textAlign: "center",
            borderRadius: 8,
            fontSize: 18,
            marginRight: 10,
          }}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#e5f3e5",
            textAlign: "center",
            borderRadius: 8,
            fontSize: 18,
          }}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>

      <Button
onPress={() => navigation.navigate('ResetPasswordScreen')}  
       style={{
          width: "100%",
          marginTop: 20,
          backgroundColor: "#74c474",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
      </Button>
    </View>
  );
}
