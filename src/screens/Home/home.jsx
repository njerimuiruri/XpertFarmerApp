import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import Header from '../../components/headers/main-header';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header navigation={navigation} />

      <View style={{ padding: 20, gap: 10 }}>
        <Button title="Farm Record" onPress={() => navigation.navigate('FarmRecord')} />
        <Button title="Add Farm Details" onPress={() => navigation.navigate('AddFarmDetailsScreen')} />
        <Button title="Profile" onPress={() => navigation.navigate('ProfileScreen')} />
        <Button title="Add Employee" onPress={() => navigation.navigate('AddEmployeeScreen')} />
        <Button title="Edit Employee" onPress={() => navigation.navigate('EditEmployeeScreen')} />
        <Button title="Farm Employee Table" onPress={() => navigation.navigate('FarmEmployeeTableScreen')} />
        <Button title="Add Flock Details" onPress={() => navigation.navigate('AddFlockDetailsScreen')} />
        <Button title="Add Livestock" onPress={() => navigation.navigate('AddLivestockScreen')} />
        <Button title="Add Livestock Group" onPress={() => navigation.navigate('AddLivestockGroupScreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Dashboard;
