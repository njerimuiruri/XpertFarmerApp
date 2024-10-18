import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input } from "native-base";

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
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
          fontSize: 22,
          fontWeight: "bold",
          color: "#74c474",
          marginBottom: 20,
        }}
      >
        REGISTER
      </Text>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: "black" }}>
          First Name
        </Text>
        <Input variant="filled" bg="#e5f3e5" w="100%" p={1} borderRadius={8} />
      </View>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: "black" }}>
          Second Name
        </Text>
        <Input variant="filled" bg="#e5f3e5" w="100%" p={1} borderRadius={8} />
      </View>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: "black" }}>
          Last Name
        </Text>
        <Input variant="filled" bg="#e5f3e5" w="100%" p={1} borderRadius={8} />
      </View>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: "black" }}>
          Phone Number
        </Text>
        <Input
          variant="filled"
          bg="#e5f3e5"
          w="100%"
          p={1}
          borderRadius={8}
          keyboardType="phone-pad"
        />
      </View>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: "black" }}>
          Email
        </Text>
        <Input
          variant="filled"
          bg="#e5f3e5"
          w="100%"
          p={1}
          borderRadius={8}
          keyboardType="email-address"
        />
      </View>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: "black" }}>
          Password
        </Text>
        <Input
          variant="filled"
          bg="#e5f3e5"
          w="100%"
          p={1}
          borderRadius={8}
          secureTextEntry
        />
      </View>

      <Button
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
        style={{
          width: "100%",
          marginTop: 20,
          backgroundColor: "#74c474",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>REGISTER</Text>
      </Button>

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 12 }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={{ fontSize: 12, color: "#74c474", fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
