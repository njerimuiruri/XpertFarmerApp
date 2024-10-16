import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';
import {icons} from '../../../constants';
import {AppVersion, CopyRight} from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decode} from 'react-native-pure-jwt';
const secret = 'charles-works-smart';
import {useFocusEffect} from '@react-navigation/native';

const CustomDrawer1 = props => {
  const {navigation} = props;
  const [showfirstname, setshowFirstName] = useState(null);
  const [secondname, setSecondName] = useState(null);
  const [duty, setDuty] = useState(null);
  const [role, setRole] = useState(null);

  // Retrieving token
  const getToken = async () => {
    try {
      const res = await AsyncStorage.getItem('token');
      verifyToken(res);
    } catch (error) {
      console.log('Error retrieving token:', error);
    }
  };

  const verifyToken = async token => {
    try {
      const decodedToken = await decode(token, secret, {
        skipValidation: true,
      });
      const {firstname, dutyAssigned, lastname, userType} =
        decodedToken.payload;

      // If you want to check the expiration manually
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (decodedToken.exp && decodedToken.exp < currentTimestamp) {
        // Token is expired
        console.log('Token has expired');
      } else {
        setshowFirstName(firstname);
        setSecondName(lastname);
        setDuty(
          dutyAssigned[0].schoolName?.length > 0
            ? dutyAssigned[0].schoolName
            : null,
        );
        setRole(userType);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  useFocusEffect(
    useCallback(() => {
      getToken();

      return () => {
        // Clean up any subscriptions or resources if needed
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <View className="items-center mt-[35px] flex space-y-4">
        <View>
          <FastImage
            source={require('../../../assets/images/ssamPic.png')}
            className="w-[110px] h-[110px] rounded-full "
          />
        </View>

        <View className="mb-5">
          {showfirstname !== null ? (
            <View>
              <View className="flex flex-row space-x-1 justify-center">
                <Text
                  className="text-white font-bold text-[15px] text-center"
                  style={styles.customFont}>
                  {showfirstname}
                </Text>
                <Text
                  className="text-white font-bold text-[15px] text-center"
                  style={styles.customFont}>
                  {secondname},
                </Text>
              </View>
              <Text
                className="text-white font-bold text-[15px] text-center"
                style={styles.customFont}>
                {role}
              </Text>
              {duty !== null && (
                <Text
                  className="text-white  mt-1 text-[13px]"
                  style={styles.customFont}>
                  {duty}
                </Text>
              )}
            </View>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text className="text-white font-bold text-[15px]">
                Login/Register
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        style={[styles.view, styles.marginvertical, styles.margintop]}>
        <DrawerItemList {...props} />
        <TouchableOpacity
          className="flex flex-row items-center space-x-7 relative left-[19px] mt-[10px] z-[999]"
          onPress={() => {
            navigation.navigate('SignIn2'), navigation.closeDrawer();
          }}>
          <FastImage
            source={icons.logout}
            className="w-[22px] h-[22px]"
            resizeMode={FastImage.resizeMode.contain}
            tintColor={'white'}
          />
          <Text className="text-white font-semibold">LogOut</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>

      {/* footer */}
      <View className="items-center relative top-[-5px] flex space-y-1">
        <View className="absolute bottom-2">
          <AppVersion color="white" />
          <CopyRight color="white" />
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  customFont: {
    fontFamily: 'serif',
  },
  view: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginHorizontal: 8,
    padding: 10,
  },
  margintop: {
    marginTop: 0,
  },
  marginbottom: {
    marginBottom: 8,
  },
  marginvertical: {
    marginVertical: 8,
  },
});
