import React, { useState } from 'react';
import {
  Box,
  Text,
  ScrollView,
  VStack,
  HStack,
  Pressable,
  Center,
} from "native-base";
import CustomIcon from '../../components/CustomIcon';

export default function FarmRecordsScreen({ navigation }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const farmRecords = [
    {
      title: "FARM ONE",
      details: {
        "Farm ID": "SG2728290",
        "Region": "Nyanza Region",
        "Division": "Nyanza",
        "Administrative Location": "Nyanza",
        "Location": "Nyanza",
        "Plot size": "20SQ BY 70SQ",
        "Farm size": "2000"
      }
    },
    {
      title: "FARM TWO",
      details: {
        "Farm ID": "SG2728291",
        "Region": "Nyanza Region",
        "Division": "Nyanza",
        "Administrative Location": "Nyanza",
        "Location": "Nyanza",
        "Plot size": "15SQ BY 50SQ",
        "Farm size": "1500"
      }
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box flex={1} bg="#f5f5f5" mt={10}>
      <Box bg="white" pt={4} pb={2}>
        <VStack space={1} px={4}>
          <HStack alignItems="center" justifyContent="space-between">
            <Pressable onPress={() => navigation.goBack()}>
              <CustomIcon
                library="AntDesign"
                name="left"
                size={24}
                color="black"
              />
            </Pressable>

            <Center flex={1}>
              <Text fontSize="md" fontWeight="medium">
                Farm records
              </Text>
            </Center>

            <Pressable onPress={() => navigation.navigate('Settings')}>
              <CustomIcon
                library="AntDesign"
                name="setting"
                size={24}
                color="black"
              />
            </Pressable>
          </HStack>
        </VStack>
      </Box>

      <ScrollView bg="#e5f3e5" p={4}>
        {farmRecords.map((farm, index) => (
          <Box key={index} mb={6} bg="white">
            <Pressable onPress={() => toggleExpand(index)} px={4} py={3}>
              <Text color="#4CAF50" fontSize="sm" fontWeight="medium">
                {farm.title}
              </Text>
              <Box h="0.5" bg="#4CAF50" opacity={0.3} mt={2} />
            </Pressable>
            {expandedIndex === index && (
              <Box px={4} pb={2}>
                {Object.entries(farm.details).map(([key, value], detailIndex, arr) => (
                  <Box 
                    key={detailIndex}
                    borderBottomWidth={detailIndex === arr.length - 1 ? 0 : 0.5}
                    borderBottomColor={detailIndex === arr.length - 1 ? "transparent" : "#E0E0E0"}
                    py={3}
                  >
                    <HStack justifyContent="space-between">
                      <Text color="gray.700" fontSize="sm">{key}</Text>
                      <Text color="gray.900" fontSize="sm">{value}</Text>
                    </HStack>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
}
