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
  HStack,
} from "native-base";
import CustomIcon from '../../components/CustomIcon';

export default function AddFarmDetailsScreen({ navigation }) {
  const [enableLocation, setEnableLocation] = useState(false);
  const [farmSize, setFarmSize] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

  const handleAddFarm = () => {
    if (!farmSize || !selectedRegion || !selectedDivision) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log("Farm details saved");
    navigation.navigate('FarmRecord');
  };

  return (
    <ScrollView>
      <Box flex={1} paddingX={4} paddingY={10} backgroundColor="white">
        <Text fontSize="20" fontWeight="bold" color="#4CAF50" mb={1}>
          Add Farm Details
        </Text>

        <HStack alignItems="center" >
          <CustomIcon
            library="AntDesign"
            name="pluscircleo"
            size={30}
            color="#4CAF50"
            style={{ marginRight: 8 }}
            onPress={handleAddFarm}
          />
          <Text fontSize="16" color="#4CAF50" onPress={handleAddFarm}>
            Add another farm
          </Text>
        </HStack>

        <Box backgroundColor="#f0f9f0" padding={4} borderRadius={8} mt={4}>
          <Text fontSize="16" color="gray.600" mb={4}>
            Fill in the farm details
          </Text>

          <VStack space={4} width="100%">
            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Farm ID <Text color="red">*</Text>
              </Text>
              <Input
                variant="filled"
                width="100%"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                placeholder="Farm ID"
                isDisabled={true} 
                value="SG2728290"
              />
            </Box>

            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Region <Text color="red">*</Text>
              </Text>
              <Select
                selectedValue={selectedRegion}
                minWidth="200"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                placeholder="Select region"
                onValueChange={(itemValue) => setSelectedRegion(itemValue)}
              >
                <Select.Item label="Region 1" value="region1" />
                <Select.Item label="Region 2" value="region2" />
              </Select>
            </Box>

            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Division <Text color="red">*</Text>
              </Text>
              <Select
                selectedValue={selectedDivision}
                minWidth="200"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                placeholder="Select division"
                onValueChange={(itemValue) => setSelectedDivision(itemValue)}
              >
                <Select.Item label="Division 1" value="division1" />
                <Select.Item label="Division 2" value="division2" />
              </Select>
            </Box>

            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Administrative Location
              </Text>
              <Input
                variant="filled"
                width="100%"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                placeholder="Enter Administrative Location"
              />
            </Box>

            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
              <Text fontSize="14" fontWeight="500" color="gray.700">
                Enable location
              </Text>
              <Switch
                size="md"
                onToggle={() => setEnableLocation(!enableLocation)}
                value={enableLocation}
              />
            </Box>

            <Box>
              <Text fontSize="14" fontWeight="500" mb={1} color="gray.700">
                Farm Size <Text color="red">*</Text>
              </Text>
              <Input
                variant="filled"
                width="100%"
                height={10}
                backgroundColor="white"
                borderRadius={4}
                value={farmSize}
                onChangeText={setFarmSize}
                keyboardType="numeric"
                placeholder="Enter Farm Size"
              />
            </Box>

            <Box>
              <Text fontSize="14" fontWeight="500" mb={2} color="gray.700">
                Types of Farming
              </Text>
              <Text fontSize="12" color="gray.600" mb={2}>
                Select one or more types of farming
              </Text>
              <VStack space={2}>
                <Checkbox value="dairy-cattle">Dairy cattle</Checkbox>
                <Checkbox value="beef-cattle">Beef cattle</Checkbox>
                <Checkbox value="dairy-meat-goat">Dairy and Meat goat</Checkbox>
                <Checkbox value="sheep-goats">Sheep and Goats</Checkbox>
                <Checkbox value="poultry">Poultry</Checkbox>
                <Checkbox value="rabbit">Rabbit</Checkbox>
                <Checkbox value="pigs">Pigs (Swine)</Checkbox>
              </VStack>
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
                onPress={handleAddFarm}
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
