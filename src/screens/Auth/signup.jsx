import React, { useState } from "react";
import { Image } from "react-native"; 
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  Pressable,
} from "native-base";
import CustomIcon from '../../components/CustomIcon'; 

export default function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      flex={1}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
      paddingX={5}
    >
      <Box position="absolute" top={0} left={0}>
        <Image
          source={require("../../assets/images/top-left-decoration.png")}
          style={{ width: 208, height: 144 }}
        />
      </Box>
      <Image
        source={require("../../assets/images/xpertLogo.jpeg")} 
        style={{ width: 90, height: 100, marginBottom: 20 }}      />
      <Text
        fontSize="22"
        fontWeight="bold"
        color="#74c474"
        mb={5}
      >
        REGISTER
      </Text>

      <VStack width="100%" space={4}>
        {/* First Name Input */}
        <Box>
          <Text fontSize="12" mb={1} color="black">
            First Name <Text color="red">*</Text>
          </Text>
          <Input
            variant="filled"
            bg="#e5f3e5"
            width="100%"
            p={1}
            borderRadius={8}
            required
          />
        </Box>

       

        <Box>
          <Text fontSize="12" mb={1} color="black">
            Last Name <Text color="red">*</Text>
          </Text>
          <Input
            variant="filled"
            bg="#e5f3e5"
            width="100%"
            p={1}
            borderRadius={8}
            required
          />
        </Box>

        <Box>
          <Text fontSize="12" mb={1} color="black">
            Phone Number <Text color="red">*</Text>
          </Text>
          <Input
            variant="filled"
            bg="#e5f3e5"
            width="100%"
            p={1}
            borderRadius={8}
            keyboardType="phone-pad"
            required
          />
        </Box>

        <Box>
          <Text fontSize="12" mb={1} color="black">
            Email <Text color="red">*</Text>
          </Text>
          <Input
            variant="filled"
            bg="#e5f3e5"
            width="100%"
            p={1}
            borderRadius={8}
            keyboardType="email-address"
            required
          />
        </Box>

        <Box>
          <Text fontSize="12" mb={1} color="black">
            Password <Text color="red">*</Text>
          </Text>
          <Input
            variant="filled"
            bg="#e5f3e5"
            width="100%"
            p={1}
            borderRadius={8}
            secureTextEntry={!showPassword}
            InputRightElement={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <CustomIcon
                  library="AntDesign"
                  name={showPassword ? "eye" : "eyeo"} 
                  size={20} 
                  color="gray"
                  style={{ marginRight: 2 }} 
                />
              </Pressable>
            }
            required
          />
        </Box>

        <Button
          onPress={() => navigation.navigate("HomeScreen")}
          width="100%"
          mt={5}
          backgroundColor="#74c474"
          padding={3}
          borderRadius={8}
        >
          <Text color="white" fontWeight="bold">
            REGISTER
          </Text>
        </Button>

        <Box mt={2} flexDirection="row" justifyContent="center">
          <Text fontSize="12" color="black">
            Already have an account?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("SignInScreen")}>
            <Text fontSize="12" color="#74c474" fontWeight="bold">
              Login
            </Text>
          </Pressable>
        </Box>
      </VStack>
    </Box>
  );
}