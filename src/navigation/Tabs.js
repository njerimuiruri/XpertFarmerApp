import React, {useCallback, useEffect, useRef} from 'react';
import {StyleSheet, View, Image, Animated} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS, icons} from '../constants';
import {ClassScreen, Home} from '../screens';
import {useDrawerStatus} from '@react-navigation/drawer';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';

const Tab = createMaterialTopTabNavigator();

const TabArr = [
  {
    route: 'Home',
    label: 'HomeLayout',
    activeIcon: icons.home,
    inActiveIcon: require('../assets/icons/setting.png'),
    Component: Home,
  },
  {
    route: 'Class',
    label: 'Class',
    activeIcon: icons.people,
    inActiveIcon: require('../assets/icons/setting.png'),
    Component: ClassScreen,
  },
  {
    route: 'Account',
    label: 'Account',
    activeIcon: icons.account,
    inActiveIcon: require('../assets/icons/setting.png'),
    Component: Home,
  },
];

export default function Tabs({navigation}) {
  const drawerStatus = useDrawerStatus();
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const borderRadius = useRef(new Animated.Value(0)).current;

  const openDrawer = useCallback(() => {
    Animated.timing(offsetValue, {
      toValue: 240,
      duration: 250,
      useNativeDriver: true,
    }).start();
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 250,
      useNativeDriver: true,
    }).start();
    Animated.timing(borderRadius, {
      toValue: 10,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [offsetValue, scaleValue, borderRadius]);

  const closeDrawer = useCallback(() => {
    Animated.timing(offsetValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
    Animated.timing(borderRadius, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [offsetValue, scaleValue, borderRadius]);

  useEffect(() => {
    drawerStatus === 'open' ? openDrawer() : closeDrawer();
  }, [drawerStatus, openDrawer, closeDrawer]);

  return (
    <View style={{backgroundColor: '#020a3b', flex: 1}}>
      <Animated.View
        style={{
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
          flex: 1,
          borderRadius: 10,
        }}>
        <Tab.Navigator
          tabBarPosition="bottom"
          screenOptions={{
            lazy: true,
            lazyPlaceholder: () => (
              <View className="bg-gray-100 h-full w-screen relative">
                <View
                  className={`absolute top-[38%] left-[34%]
              `}>
                  <LottieView
                    source={require('../assets/lottie/splashloader.json')}
                    autoPlay
                    loop
                    width={150}
                    height={150}
                  />
                </View>
              </View>
            ),
            tabBarPressColor: 'transparent',
            swipeEnabled: false,
            tabBarShowLabel: true,
            tabBarIndicatorStyle: {
              position: 'absolute',
              top: 0,
              height: 5,
              left: 30,
              width: 80,
              backgroundColor: COLORS.secondary,
              borderBottomRightRadius: 3,
              borderBottomLeftRadius: 3,
            },
            tabBarLabelStyle: {
              fontWeight: '600',
              fontFamily: 'serif',
              fontSize: 11,
              position: 'relative',
              top: -0,
              left: 3,
              textTransform: 'capitalize',
            },
            tabBarStyle: {
              height: 65,
              borderTopWidth: 1,
              borderColor: '#E6E7E8',
              backgroundColor: 'white',
            },
            tabBarActiveTintColor: COLORS.secondary,
            tabBarInactiveTintColor: 'black',
          }}>
          {TabArr.map((tab, index) => {
            const {route, Component, activeIcon, inActiveIcon} = tab;
            return (
              <Tab.Screen
                key={index}
                name={route}
                options={{
                  tabBarIcon: ({color, size, focused}) => (
                    <FastImage
                      source={activeIcon}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                      resizeMode="contain"
                      tintColor={focused ? COLORS.secondary : 'gray'}
                    />
                  ),
                }}>
                {props => <Component {...props} navigation={navigation} />}
              </Tab.Screen>
            );
          })}
        </Tab.Navigator>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'serif',
  },
});
