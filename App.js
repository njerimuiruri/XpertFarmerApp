import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, StatusBar } from "native-base";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./src/screens/SplashScreen/index";
import { ToastProvider } from "react-native-toast-notifications";
// import DrawerNav from "./src/navigation/drawer/drawer1/DrawerNav1";

const Stack = createNativeStackNavigator();

import {
  LoginScreen,
  HomeScreen,
  Otp,
  SignupScreen,
  ForgotPasswordScreen,
  OnboardingScreen,
  ResetPassword,
  EmailOtpScreen,
} from "./src/screens/index";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [signInNeeded, setSignInNeeded] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await Promise.all([]);

        const FirstLaunch = await AsyncStorage.getItem("isFirstLaunch");
        if (FirstLaunch === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem("isFirstLaunch", "false");
        }

        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <>
      <NativeBaseProvider>
        <ToastProvider>
          <StatusBar
            translucent
            backgroundColor={"transparent"}
            animated={true}
            barStyle={"light-content"}
          />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              {!isFirstLaunch ? (
                <Stack.Screen
                  name="onBoardingScreen"
                  component={OnboardingScreen}
                  options={{ headerShown: false }}
                />
              ) : signInNeeded ? (
                <Stack.Screen
                  name="SignInScreen2"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
              ) : null}
              <Stack.Screen
                name="SignInScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OtpSreen"
                component={Otp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="EmailOtpScreen"
                component={EmailOtpScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ToastProvider>
      </NativeBaseProvider>
      <Toast />
    </>
  );
}
