import React, { useState } from "react";
import { View, ScrollView as RNScrollView, StyleSheet } from "react-native";
import { Text, Input, Button, Radio, Modal, VStack, HStack, Checkbox, Select } from "native-base";
import SecondaryHeader from "../../components/headers/secondary-header";

const feedTypes = {
  basal: ["Type A", "Type B", "Type C"],
  concentrates: ["Type D", "Type E"],
  supplements: ["Type F", "Type G", "Type H"],
};

export default function AddFarmFeedsScreen({ navigation }) {
  const [formData, setFormData] = useState({
    selectedFeedTypes: [],
    selectedFeedType: "",
    feedSource: "",
    feedingSchedule: "",
    quantity: "",
    date: "",
    purchasePrice: "",
    supplierName: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (type) => {
    setFormData(prev => {
      const selectedFeedTypes = prev.selectedFeedTypes.includes(type)
        ? prev.selectedFeedTypes.filter(feed => feed !== type)
        : [...prev.selectedFeedTypes, type];
      return { ...prev, selectedFeedTypes, selectedFeedType: "" }; 
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowModal(true);
  };

  const handleAddAnother = () => {
    setFormData({
      selectedFeedTypes: [],
      selectedFeedType: "",
      feedSource: "",
      feedingSchedule: "",
      quantity: "",
      date: "",
      purchasePrice: "",
      supplierName: "",
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
      <View style={styles.inputSpacer} />
    </View>
  );

  return (
    <View style={styles.container}>
      <SecondaryHeader title="Add Farm Feeds" />
      <RNScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Fill in the farm feed details</Text>

          <Text style={styles.label}>Select Feed Types:</Text>
          {Object.keys(feedTypes).map((feed, index) => (
            <Checkbox
              key={index}
              isChecked={formData.selectedFeedTypes.includes(feed)}
              onChange={() => handleCheckboxChange(feed)}
            >
              {feed.charAt(0).toUpperCase() + feed.slice(1)}
            </Checkbox>
          ))}

          <View style={styles.inputSpacer} />
          <View style={styles.formField}>
            <Text style={styles.label}>Type of Feeds:</Text>
            <Select
              selectedValue={formData.selectedFeedType}
              minWidth="200"
              accessibilityLabel="Choose Type of Feeds"
              placeholder="Choose Type of Feeds"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <Text>✓</Text>,
              }}
              onValueChange={(itemValue) => setFormData(prev => ({ ...prev, selectedFeedType: itemValue }))}
            >
              {formData.selectedFeedTypes.length > 0 && formData.selectedFeedTypes.map((feedType, index) => (
                feedTypes[feedType].map((type, i) => (
                  <Select.Item key={`${index}-${i}`} label={type} value={type} />
                ))
              ))}
            </Select>
            <View style={styles.inputSpacer} />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Source of Feeds</Text>
            <Radio.Group
              name="feedSource"
              value={formData.feedSource}
              onChange={(value) => setFormData(prev => ({ ...prev, feedSource: value }))}
            >
              <VStack space={2}>
                <Radio value="Personally Grown"><Text>Personally Grown</Text></Radio>
                <Radio value="Grown and Purchased"><Text>Grown and Purchased</Text></Radio>
                <Radio value="Purely Purchased"><Text>Purely Purchased</Text></Radio>
              </VStack>
            </Radio.Group>
            <View style={styles.inputSpacer} />
          </View>

          {renderFormField("Feeding Schedule", formData.feedingSchedule,
            (value) => setFormData(prev => ({ ...prev, feedingSchedule: value })))}
          
          {renderFormField("Quantity", formData.quantity,
            (value) => setFormData(prev => ({ ...prev, quantity: value })), "numeric")}
          
          {renderFormField("Date (DD/MM/YYYY)", formData.date,
            (value) => setFormData(prev => ({ ...prev, date: value })))} 
          
          {renderFormField("Purchase Price", formData.purchasePrice,
            (value) => setFormData(prev => ({ ...prev, purchasePrice: value })))} 
          
          {renderFormField("Supplier Name", formData.supplierName,
            (value) => setFormData(prev => ({ ...prev, supplierName: value })))} 

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
              <Text style={styles.modalTitle}>Add another feed</Text>
              <Text style={styles.modalSubtitle}>
                Feel free to add another feed, the more the better
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
  scrollView: {
    flex: 1,
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
  input: {
    borderRadius: 8,
  },
  inputSpacer: {
    height: 15, 
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