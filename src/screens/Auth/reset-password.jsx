import { View, Text, TextInput, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { Button } from "native-base";
import CustomIcon from '../../components/CustomIcon';  

export default function ResetPassword({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {

    setModalVisible(true);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
      }}>

      <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#74c474', marginBottom: 20 }}>
        Reset Password
      </Text>

      <CustomIcon
        library="AntDesign"
        name="lock1"
        size={40}
        color="black"
        style={{ marginBottom: 20 }}
      />

      <Text style={{ fontSize: 14, marginBottom: 20, textAlign: 'center' }}>
        Please enter your new password
      </Text>

      <View style={{ width: '100%', marginBottom: 16 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: 'black' }}>New password</Text>
        <TextInput
          style={{
            width: '100%',
            height: 40,
            backgroundColor: '#e5f3e5',
            borderRadius: 8,
            paddingLeft: 10,
            fontSize: 14,
          }}
          secureTextEntry={true}
        />
      </View>

      <View style={{ width: '100%', marginBottom: 24 }}>
        <Text style={{ fontSize: 12, marginBottom: 4, color: 'black' }}>Confirm new password</Text>
        <TextInput
          style={{
            width: '100%',
            height: 40,
            backgroundColor: '#e5f3e5',
            borderRadius: 8,
            paddingLeft: 10,
            fontSize: 14,
          }}
          secureTextEntry={true}
        />
      </View>

      <Button
        onPress={handleSubmit}
        style={{
          width: '100%',
          backgroundColor: '#74c474',
          padding: 12,
          borderRadius: 8,
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
      </Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
          }}>
            <CustomIcon
              library="AntDesign"
              name="checkcircle"
              size={40}
              color="#74c474"
              style={{ marginBottom: 20 }}
            />

            <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
              Your new password has been updated successfully
            </Text>

            <Pressable
              style={{
                backgroundColor: '#74c474',
                paddingVertical: 10,
                paddingHorizontal: 40,
                borderRadius: 5,
              }}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('SignInScreen'); 
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
