import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomIcon from '../CustomIcon';
import ThemeToggleButton from '../ThemeToggleButton';
import { useTheme } from '@contexts/theme-context';
import themeColors from '@constants/themeColors';
import { Avatar } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const SecondaryHeader = ({ title }) => {
  const { isDarkMode } = useTheme();
  const colors = themeColors[isDarkMode ? 'dark' : 'light'];
  const styles = createStyles(colors);

  const navigation = useNavigation();

  return (
    <View style={styles.header} className="px-2">
      <View style={styles.leftSection}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}>
          <CustomIcon
            library="Ionicons"
            name="arrow-back-circle-sharp"
            size={40}
            color={colors.secondary}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <View
        style={styles.rightSection}
        className="flex-row items-center space-x-4 mr-1">
        <ThemeToggleButton />
        <Avatar size="sm" bg={colors.secondary}>
          CM
        </Avatar>
      </View>
    </View>
  );
};

const createStyles = (colors) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 4,
      paddingVertical: 10,
      backgroundColor: colors.background,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      padding: 8,
    },
    headerTitle: {
      fontSize: 25,
      fontWeight: '800',
      fontFamily: 'Poppins-SemiBold',
      color: colors.textPrimary,
    },
  });

export default SecondaryHeader;
