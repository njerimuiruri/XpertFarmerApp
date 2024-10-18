import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Button } from "native-base";

export default function LoginScreen({ navigation }) {
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
        <Image
          source={require("../../assets/images/top-left-decoration.png")}
          style={{ width: 208, height: 144 }}
        />
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#74c474",
          marginBottom: 20,
        }}
      >
        Login
      </Text>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 10, marginBottom: 4, color: "black" }}>
          Phone Number
        </Text>
        <TextInput
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#e5f3e5",
            textAlign: "left",
            borderRadius: 8,
            paddingHorizontal: 8,
            fontSize: 12,
          }}
          keyboardType="phone-pad"
        />
      </View>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 10, marginBottom: 4, color: "black" }}>
          Password
        </Text>
        <TextInput
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#e5f3e5",
            textAlign: "left",
            borderRadius: 8,
            paddingHorizontal: 8,
            fontSize: 12,
          }}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
          style={{ alignSelf: "flex-end", marginTop: 5 }}
        >
          <Text style={{ fontSize: 12, color: "black" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <Button
        onPress={() => {}}
        style={{
          width: "100%",
          marginTop: 20,
          backgroundColor: "#74c474",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>LOGIN</Text>
      </Button>

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 12, color: "black" }}>
          Do not have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={{ fontSize: 12, color: "#74c474", fontWeight: "bold" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
