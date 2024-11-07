import React, { useState } from "react";
import { Box, Pressable, HStack, ScrollView, Text, VStack, Checkbox, Center } from "native-base";
import FastImage from 'react-native-fast-image';
import { icons } from '../../constants';

export default function FarmEmployeeTableScreen({ navigation }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const tableData = [
    { fullName: "John Doe", farmId: "F001", position: "Farm Manager", phone: "123-456-7890", dateOfEmployment: "2023-01-15" },
    { fullName: "Jane Smith", farmId: "F002", position: "Assistant Manager", phone: "098-765-4321", dateOfEmployment: "2023-03-22" },
    { fullName: "Alice Johnson", farmId: "F003", position: "Field Supervisor", phone: "456-123-7890", dateOfEmployment: "2022-11-01" },
    { fullName: "Robert Brown", farmId: "F004", position: "Crop Technician", phone: "789-456-1230", dateOfEmployment: "2023-02-10" },
    { fullName: "Sarah Wilson", farmId: "F005", position: "Livestock Specialist", phone: "321-654-0987", dateOfEmployment: "2023-05-15" },
    { fullName: "Michael Chen", farmId: "F006", position: "Equipment Operator", phone: "654-789-0123", dateOfEmployment: "2023-06-01" },
    { fullName: "Emily Davis", farmId: "F007", position: "Quality Inspector", phone: "147-258-3690", dateOfEmployment: "2023-04-12" },
    { fullName: "David Martinez", farmId: "F008", position: "Maintenance Tech", phone: "369-852-1470", dateOfEmployment: "2023-07-20" },
    { fullName: "Lisa Anderson", farmId: "F009", position: "Data Analyst", phone: "741-852-9630", dateOfEmployment: "2023-08-05" },
    { fullName: "James Wilson", farmId: "F010", position: "Farm Hand", phone: "258-147-3690", dateOfEmployment: "2023-09-15" }
  ];

  const toggleSelectAll = () => {
    setSelectedRows(selectedRows.length === tableData.length ? [] : tableData.map((_, i) => i));
  };

  const toggleSelectRow = (index) => {
    setSelectedRows(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <Box flex={1} backgroundColor="#fff">
      <Box borderBottomWidth={1} borderBottomColor="#e0e0e0" paddingX={4} paddingY={6}>
        <HStack justifyContent="space-between" alignItems="center" mt={4}>
          <Pressable onPress={() => console.log("Menu")}>
            <FastImage
              source={icons.menu2}
              style={{ width: 20, height: 20 }}
              tintColor="#000"
            />
          </Pressable>
          <Text fontSize="lg" fontWeight="500" color="#8bc34a">Employees</Text>
          <Pressable onPress={() => console.log("Settings")}>
            <FastImage
              source={icons.settings}
              style={{ width: 20, height: 20 }}
              tintColor="#000"
            />
          </Pressable>
        </HStack>
      </Box>

      <HStack justifyContent="flex-end" space={4} paddingX={4} paddingY={4} borderBottomWidth={1} borderBottomColor="#e0e0e0">
        <Pressable onPress={() => console.log("Delete")}>
          <HStack alignItems="center" space={2}>
            <FastImage
              source={icons.remove}
              style={{ width: 16, height: 16 }}
              tintColor="#dc3545"
            />
            <Text fontSize="sm" color="#dc3545">Delete</Text>
          </HStack>
        </Pressable>

        <Pressable onPress={() => console.log("Filter")}>
          <HStack alignItems="center" space={2}>
            <FastImage
              source={icons.filter}
              style={{ width: 16, height: 16 }}
              tintColor="#666"
            />
            <Text fontSize="sm" color="#666">Filters</Text>
          </HStack>
        </Pressable>

        <Pressable onPress={() => console.log("Export")}>
          <HStack alignItems="center" space={2}>
            <FastImage
              source={icons.download}
              style={{ width: 16, height: 16 }}
              tintColor="#666"
            />
            <Text fontSize="sm" color="#666">Export</Text>
          </HStack>
        </Pressable>
      </HStack>

      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <VStack flex={1}>
          <HStack backgroundColor="#8bc34a" paddingY={3}>
            <Box width="50px" alignItems="center">
              <Checkbox
                isChecked={selectedRows.length === tableData.length}
                onChange={toggleSelectAll}
                accessibilityLabel="Select All"
                colorScheme="green"
              />
            </Box>
            <Text color="white" fontWeight="600" width="120px" px={2}>Farm ID</Text>
            <Text color="white" fontWeight="600" width="150px" px={2}>Full Name</Text>
            <Text color="white" fontWeight="600" width="150px" px={2}>Position</Text>
            <Text color="white" fontWeight="600" width="120px" px={2}>Phone</Text>
            <Text color="white" fontWeight="600" width="150px" px={2}>Date of Employment</Text>
          </HStack>

          <ScrollView showsVerticalScrollIndicator={true}>
            {tableData.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => toggleSelectRow(index)}
              >
                <HStack 
                  paddingY={3}
                  borderBottomWidth={1}
                  borderBottomColor="#e0e0e0"
                  backgroundColor={selectedRows.includes(index) ? "#f5f5f5" : "white"}
                >
                  <Box width="50px" alignItems="center">
                    <Checkbox
                      isChecked={selectedRows.includes(index)}
                      onChange={() => toggleSelectRow(index)}
                      accessibilityLabel="Select Row"
                      colorScheme="green"
                    />
                  </Box>
                  <Text width="120px" color="#333" px={2}>{item.farmId}</Text>
                  <Text width="150px" color="#333" px={2}>{item.fullName}</Text>
                  <Text width="150px" color="#333" px={2}>{item.position}</Text>
                  <Text width="120px" color="#333" px={2}>{item.phone}</Text>
                  <Text width="150px" color="#333" px={2}>{item.dateOfEmployment}</Text>
                </HStack>
              </Pressable>
            ))}
          </ScrollView>
        </VStack>
      </ScrollView>

      <Center position="absolute" bottom={6} right={6}>
        <Pressable
          onPress={() => navigation.navigate("AddEmployeeScreen")}
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: "#8bc34a",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <FastImage
            source={icons.plus}
            style={{ width: 24, height: 24 }}
            tintColor="white"
          />
        </Pressable>
      </Center>
    </Box>
  );
}