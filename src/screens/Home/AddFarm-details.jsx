import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  Select,
  Checkbox,
  Switch,
  ScrollView,
  HStack
} from "native-base";
import CustomIcon from '../../components/CustomIcon';  // Ensure CustomIcon is properly set up to use icons as needed

export default function AddEmployeeDetailsScreen({ navigation }) {
  const [selectedFarm, setSelectedFarm] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfEmployment, setDateOfEmployment] = useState("");
  const [workingHours, setWorkingHours] = useState({
    fullTime: false,
    morningEvening: false,
    weekendsOnly: false,
    harvestPeriodsOnly: false
  });
  const [paymentRates, setPaymentRates] = useState("");

  const handleAddEmployee = () => {
    if (!selectedFarm || !fullName || !phoneNumber || !dateOfEmployment) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log("Employee details saved");
    navigation.navigate('EmployeeRecord');
  };

  return (
    <ScrollView>
      <Box flex={1} paddingX={4} paddingY={10} backgroundColor="white">
        <Text fontSize="20" fontWeight="bold" color="#4CAF50" mb={1}>
          Add Employee Details
        </Text>

        <HStack alignItems="center">
          <CustomIcon
            library="AntDesign"
            name="pluscircleo"
            size={30}
            color="#4CAF50"
            style={{ marginRight: 8 }}
            onPress={handleAddEmployee}
          />
          <Text fontSize="16" color="#4CAF50" onPress={handleAddEmployee}>
            Add another employee
          </Text>
        </HStack>

        <Box backgroundColor="#f0f9f0" padding={4} borderRadius={8} mt={4}>
          <Text fontSize="16" color="gray.600" mb={4}>
            Fill in the employee details
          </Text>

          <VStack space={4} width="100%">
            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Attached Farm ID <Text color="red">*</Text>
              </Text>
              <Select
                selectedValue={selectedFarm}
                minWidth="200"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                placeholder="Select farm"
                onValueChange={(itemValue) => setSelectedFarm(itemValue)}
              >
                <Select.Item label="Farm 1" value="farm1" />
                <Select.Item label="Farm 2" value="farm2" />
              </Select>
            </Box>

            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Full Name <Text color="red">*</Text>
              </Text>
              <Input
                variant="filled"
                width="100%"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                placeholder="Enter Full Name"
                value={fullName}
                onChangeText={setFullName}
              />
            </Box>

            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Phone Number <Text color="red">*</Text>
              </Text>
              <Input
                variant="filled"
                width="100%"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                keyboardType="phone-pad"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </Box>

            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Date of Employment <Text color="red">*</Text>
              </Text>
              <Input
                variant="filled"
                width="100%"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                placeholder="YYYY-MM-DD"
                value={dateOfEmployment}
                onChangeText={setDateOfEmployment}
              />
            </Box>

            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
              <Text fontSize="14" fontWeight="500" color="gray.700">
                Working Hours <Text color="red">*</Text>
              </Text>
              <HStack space={2}>
                <Checkbox value="Full Time" isChecked={workingHours.fullTime} onChange={() => setWorkingHours({...workingHours, fullTime: !workingHours.fullTime})}>Full Time</Checkbox>
                <Checkbox value="Morning and Evening" isChecked={workingHours.morningEvening} onChange={() => setWorkingHours({...workingHours, morningEvening: !workingHours.morningEvening})}>Morning & Evening</Checkbox>
              </HStack>
            </Box>

            <Box flexDirection="row" justifyContent="space-between" mt={4}>
              <Button
                width="45%"
                variant="outline"
                borderColor="#4CAF50"
                _text={{ color: "#4CAF50" }}
                onPress={() => navigation.goBack()}
              >
                Back
              </Button>
              <Button
                width="45%"
                backgroundColor="#4CAF50"
                _text={{ color: "white" }}
                onPress={handleAddEmployee}
              >
                Save
              </Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
}
