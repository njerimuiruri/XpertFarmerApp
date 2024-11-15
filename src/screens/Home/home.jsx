import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Header from '../../components/headers/main-header';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../constants';

const MenuSection = ({ title, description, children }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{description}</Text>
    </View>
    <View style={styles.sectionContent}>
      {children}
    </View>
  </View>
);

const MenuButton = ({ title, icon, onPress, color = "#4CAF50" }) => (
  <TouchableOpacity
    style={styles.menuButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={[styles.iconContainer, { backgroundColor: color }]}>
      <FastImage
        source={icon}
        style={styles.icon}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
    <Text style={styles.menuButtonText}>{title}</Text>
    <FastImage
      source={icons.rightArrow}
      style={styles.arrowIcon}
      tintColor="#666"
      resizeMode={FastImage.resizeMode.contain}
    />
  </TouchableOpacity>
);

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to XpertFarmer</Text>
          <Text style={styles.welcomeSubtext}>Manage your farm operations efficiently</Text>
        </View>

        <MenuSection
          title="Farm Management Screens"
          description="Manage your farm records and operational details"
        >
          <MenuButton
            title="Farm Record"
            icon={icons.report}
            onPress={() => navigation.navigate('FarmRecord')}
          />
          <MenuButton
            title="Add Farm Details"
            icon={icons.feeding}
            onPress={() => navigation.navigate('AddFarmDetailsScreen')}
          />
          <MenuButton
            title="Profile Settings"
            icon={icons.settings}
            onPress={() => navigation.navigate('ProfileScreen')}
          />
        </MenuSection>

        <MenuSection
          title="Employee Management Screens"
          description="Handle your workforce and staff records"
        >
          <MenuButton
            title="Add Employee"
            icon={icons.user}
            onPress={() => navigation.navigate('AddEmployeeScreen')}
            color="#2196F3"
          />
          <MenuButton
            title="Edit Employee"
            icon={icons.settings}
            onPress={() => navigation.navigate('EditEmployeeScreen')}
            color="#2196F3"
          />
          <MenuButton
            title="Employee Directory"
            icon={icons.account}
            onPress={() => navigation.navigate('FarmEmployeeTableScreen')}
            color="#2196F3"
          />
        </MenuSection>

        <MenuSection
          title="Livestock Management Screens"
          description="Monitor and track your livestock inventory"
        >
          <MenuButton
            title="Add Flock Details"
            icon={icons.agriculture}
            onPress={() => navigation.navigate('AddFlockDetailsScreen')}
            color="#FF9800"
          />
          <MenuButton
            title="Livestock Groups"
            icon={icons.agriculture}
            onPress={() => navigation.navigate('OptionLivestockGroupScreen')}
            color="#FF9800"
          />
          <MenuButton
            title="Livestock Profile"
            icon={icons.agriculture}
            onPress={() => navigation.navigate('OptionDetailsScreen')}
            color="#FF9800"
          />
        </MenuSection>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  welcomeContainer: {
    marginBottom: 24,
    paddingVertical: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: '#666666',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666666',
  },
  sectionContent: {
    gap: 12,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  menuButtonText: {
    flex: 1,
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
});

export default Dashboard;
