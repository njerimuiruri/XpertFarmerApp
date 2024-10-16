import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { Button } from "native-base";
import CustomIcon from "../../components/CustomIcon";

export default function ForgotPassword({ navigation }) {
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
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#74c474",
          marginBottom: 20,
        }}
      >
        Forgot Password
      </Text>

      <Image
        source={require("../../assets/svg/padlock.svg")}
        style={{ width: 40, height: 40, marginBottom: 20 }}
      />

      <Text style={{ fontSize: 14, marginBottom: 20, textAlign: "center" }}>
        Please choose your registered email or phone number
      </Text>

      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: "black" }}>
          Phone Number
        </Text>
        <View style={{ position: "relative" }}>
          <CustomIcon
            library="AntDesign"
            name="phone"
            size={20}
            color="black"
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
          />
          <TextInput
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#e5f3e5",
              borderRadius: 8,
              paddingLeft: 40,
              fontSize: 14,
            }}
            keyboardType="phone-pad"
            placeholder="07xxxxxxxx"
          />
        </View>
      </View>

      <Text style={{ marginVertical: 10 }}>OR</Text>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: "black" }}>
          Email
        </Text>
        <View style={{ position: "relative" }}>
          <CustomIcon
            library="AntDesign"
            name="mail"
            size={20}
            color="black"
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
          />
          <TextInput
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#e5f3e5",
              borderRadius: 8,
              paddingLeft: 40,
              fontSize: 14,
            }}
            keyboardType="email-address"
            placeholder="support@xcapital.com"
          />
        </View>
      </View>

      <Button
        onPress={() => navigation.navigate("OtpSreen")}
        style={{
          width: "100%",
          backgroundColor: "#74c474",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
      </Button>
    </View>
  );
}
