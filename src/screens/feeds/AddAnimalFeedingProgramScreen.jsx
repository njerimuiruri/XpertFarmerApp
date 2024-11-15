import React, { useState } from "react";
import { View, ScrollView as RNScrollView, StyleSheet } from "react-native";
import { Text, Input, Button, Radio, Modal, VStack, HStack, Checkbox, Select } from "native-base";
import SecondaryHeader from "../../components/headers/secondary-header";

const animalTypes = {
  dairy: ["Calf", "Heifer", "Lactating Cow", "Dry Cow"],
  beef: [],
  swine: [],
  poultry: [],
  sheepGoats: [],
};

export default function AddAnimalFeedingProgramScreen({ navigation }) {
  const [formData, setFormData] = useState({
    selectedFeedingPrograms: [],
    selectedAnimalId: "",
    selectedAnimalType: "",
    selectedSpecificAnimal: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (program) => {
    setFormData(prev => {
      const selectedFeedingPrograms = prev.selectedFeedingPrograms.includes(program)
        ? prev.selectedFeedingPrograms.filter(item => item !== program)
        : [...prev.selectedFeedingPrograms, program];
      return { ...prev, selectedFeedingPrograms }; 
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowModal(true);
  };

  const handleAddAnother = () => {
    setFormData({
      selectedFeedingPrograms: [],
      selectedAnimalId: "",
      selectedAnimalType: "",
      selectedSpecificAnimal: "",
    });
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <SecondaryHeader title="Animal Feeding Program" />
      <RNScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Fill in the animal feeding details</Text>

          <Text style={styles.label}>Select Feeding Programs:</Text>
          <Checkbox
            isChecked={formData.selectedFeedingPrograms.includes("Single Animal Feeding Program")}
            onChange={() => handleCheckboxChange("Single Animal Feeding Program")}
          >
            Single Animal Feeding Program
          </Checkbox>
          <Checkbox
            isChecked={formData.selectedFeedingPrograms.includes("Group Feeding Program")}
            onChange={() => handleCheckboxChange("Group Feeding Program")}
          >
            Group Feeding Program
          </Checkbox>
          <View style={styles.inputSpacer} />

          <View style={styles.formField}>
            <Text style={styles.label}>Animal ID:</Text>
            <Select
              selectedValue={formData.selectedAnimalId}
              minWidth="200"
              placeholder="Choose Animal ID"
              onValueChange={(itemValue) => setFormData(prev => ({ ...prev, selectedAnimalId: itemValue }))}
            >
              <Select.Item label="Dairy" value="dairy" />
              <Select.Item label="Beef" value="beef" />
              <Select.Item label="Swine" value="swine" />
              <Select.Item label="Poultry" value="poultry" />
              <Select.Item label="Sheep & Goats" value="sheepGoats" />
            </Select>
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Choose Animal Type:</Text>
            <Radio.Group
              name="animalType"
              value={formData.selectedAnimalType}
              onChange={(value) => setFormData(prev => ({ ...prev, selectedAnimalType: value }))}
            >
              <VStack space={2}>
                <Radio value="Dairy"><Text>Dairy</Text></Radio>
                <Radio value="Beef"><Text>Beef</Text></Radio>
                <Radio value="Swine"><Text>Swine</Text></Radio>
                <Radio value="Poultry"><Text>Poultry</Text></Radio>
                <Radio value="Sheep & Goats"><Text>Sheep & Goats</Text></Radio>
              </VStack>
            </Radio.Group>
          </View>

          {formData.selectedAnimalType === "Dairy" && (
            <View style={styles.formField}>
              <Text style={styles.label}>Specific Animal:</Text>
              <Select
                selectedValue={formData.selectedSpecificAnimal}
                minWidth="200"
                placeholder="Choose Specific Animal"
                onValueChange={(itemValue) => setFormData(prev => ({ ...prev, selectedSpecificAnimal: itemValue }))}
              >
                {animalTypes.dairy.map((animal, index) => (
                  <Select.Item key={index} label={animal} value={animal} />
                ))}
              </Select>
            </View>
          )}

          <HStack justifyContent="center" space={4} style={styles.buttonContainer}>
            <Button onPress={() => navigation.goBack()} style={styles.button}>
              <Text>Back</Text>
            </Button>
            <Button onPress={handleSubmit} style={styles.submitButton}>
              <Text>Submit</Text>
            </Button>
          </HStack>
        </View>
      </RNScrollView>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content style={styles.modalContent}>
          <Modal.Body>
            <VStack space={6} alignItems="center" style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Add another feeding entry</Text>
              <Text style={styles.modalSubtitle}>Feel free to add another entry.</Text>
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
  scrollView: {
    flex: 1,
  },
  inputSpacer: {
    height: 20, 
  },
  formContainer: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    padding: 32,
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
    fontWeight: 'bold',
  },
  formField: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 24,
    justifyContent: 'center'
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
  },
});