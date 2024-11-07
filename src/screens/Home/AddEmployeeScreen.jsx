import React, { useState } from "react";
import { View, ScrollView as RNScrollView, StyleSheet } from "react-native";
import { Text, Input, Button, Checkbox, Modal, VStack, HStack, Pressable } from "native-base";
import FastImage from 'react-native-fast-image';
import { icons } from '../../constants';

export default function AddEmployeeScreen({ navigation }) {
  const [formData, setFormData] = useState({
    farmId: "",
    fullName: "",
    phone: "",
    dateOfEmployment: "",
    workingHours: [],
    paymentRate: ""
  });

  const [showModal, setShowModal] = useState(false);

  const workingHourOptions = [
    "Full time",
    "Morning and Evening",
    "Weekends only",
    "Harvest periods only"
  ];

  const handleWorkingHoursChange = (option) => {
    setFormData(prev => ({
      ...prev,
      workingHours: prev.workingHours.includes(option)
        ? prev.workingHours.filter(item => item !== option)
        : [...prev.workingHours, option]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setShowModal(true);
  };

  const handleAddAnother = () => {
    setFormData({
      farmId: "",
      fullName: "",
      phone: "",
      dateOfEmployment: "",
      workingHours: [],
      paymentRate: ""
    });
    setShowModal(false);
  };

  const renderFormField = (label, value, onChangeText, keyboardType = "default", placeholder = "") => (
    <View style={styles.formField}>
      <Text style={styles.label}>{label}</Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.input}
        backgroundColor="#e8f5e9"
        borderWidth={0}
        fontSize="sm"
        height={10}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HStack justifyContent="space-between" alignItems="center">
          <Pressable onPress={() => console.log("Menu")}>
            <FastImage
              source={icons.menu2} 
              style={{ width: 20, height: 20 }}
              tintColor="black"
            />
          </Pressable>
          <Text style={styles.headerTitle}>Add Employee Details</Text>
          <Pressable onPress={() => console.log("Settings")}>
            <FastImage
              source={icons.settings}
              style={{ width: 20, height: 20 }}
              tintColor="black"
            />
          </Pressable>
        </HStack>
        <View style={styles.greenLine} />
      </View>

      <RNScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Fill in the employee details</Text>

          {renderFormField("Attached Farm ID", formData.farmId, 
            (value) => setFormData(prev => ({ ...prev, farmId: value })))}

          {renderFormField("Full Name", formData.fullName,
            (value) => setFormData(prev => ({ ...prev, fullName: value })))}

          {renderFormField("Phone Number", formData.phone,
            (value) => setFormData(prev => ({ ...prev, phone: value })), "phone-pad")}

          {renderFormField("Date of Employment", formData.dateOfEmployment,
            (value) => setFormData(prev => ({ ...prev, dateOfEmployment: value })), "default", "DD/MM/YY")}

          <View style={styles.formField}>
            <Text style={styles.label}>Working Hours</Text>
            <Text style={styles.subtitle}>Select the type of working hours</Text>
            <VStack space={2} mt={2}>
              {workingHourOptions.map((option) => (
                <Checkbox
                  key={option}
                  value={option}
                  isChecked={formData.workingHours.includes(option)}
                  onChange={() => handleWorkingHoursChange(option)}
                  colorScheme="green"
                >
                  <Text>{option}</Text>
                </Checkbox>
              ))}
            </VStack>
          </View>

          {renderFormField("Payment Rates", formData.paymentRate,
            (value) => setFormData(prev => ({ ...prev, paymentRate: value })), "numeric")}

          <HStack space={4} style={styles.buttonContainer}>
            <Button
              flex={1}
              variant="outline"
              onPress={() => navigation.goBack()}
              borderColor="#8bc34a"
              _text={{ color: "#8bc34a" }}
              style={styles.button}
            >
              <Text color="#8bc34a">Back</Text>
            </Button>
            <Button
              flex={1}
              onPress={handleSubmit}
              style={[styles.button, styles.submitButton]}
            >
              <Text color="white">Submit</Text>
            </Button>
          </HStack>
        </View>
      </RNScrollView>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content style={styles.modalContent}>
          <Modal.Body>
            <VStack space={6} alignItems="center" style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Add another employee</Text>
              <Text style={styles.modalSubtitle}>
                Feel free to add another employee, the more the better
              </Text>
              <HStack space={4} width="100%">
                <Button
                  flex={1}
                  variant="outline"
                  onPress={() => navigation.goBack()}
                  style={styles.modalButton}
                >
                  <Text color="#666">No</Text>
                </Button>
                <Button
                  flex={1}
                  onPress={handleAddAnother}
                  style={[styles.modalButton, styles.modalSubmitButton]}
                >
                  <Text color="white">Yes</Text>
                </Button>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
  },
  headerContainer: {
    backgroundColor: 'white', 
    paddingVertical: 40,  
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: '#8bc34a',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
  greenLine: {
    height: 2,
    backgroundColor: '#8bc34a',
    width: '100%',
    alignSelf: 'center',
    marginTop: 12,
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  formField: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    height: 45,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#8bc34a',
    borderWidth: 0,
  },
  modalContent: {
    borderRadius: 16,
    margin: 20,
  },
  modalContainer: {
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  modalButton: {
    height: 45,
    borderRadius: 8,
  },
  modalSubmitButton: {
    backgroundColor: '#8bc34a',
    borderWidth: 0,
  }
});
