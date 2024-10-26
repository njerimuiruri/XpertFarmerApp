import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import Header from '../../components/headers/main-header';

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      {/* <Text style={styles.text}>Dashboard</Text> */}
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
