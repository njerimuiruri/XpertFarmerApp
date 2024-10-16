import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomIcon from '../CustomIcon';
import ThemeToggleButton from '../ThemeToggleButton';
import { useTheme } from '@contexts/theme-context';
import themeColors from '@constants/themeColors';
import { ThemeColorSet } from '../../types/theme-colors';
import { Avatar, IconButton } from 'native-base';

const Header = ({
  setShowModal,
  showModal,
}) => {
  const { isDarkMode } = useTheme();
  const colors = themeColors[isDarkMode ? 'dark' : 'light'];
  const styles = createStyles(colors);

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <TouchableOpacity style={styles.iconButton}>
          <CustomIcon
            library="AntDesign"
            name="dingding-o"
            size={40}
            color={colors.secondary}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>DataReach</Text>
      </View>

      <View
        style={styles.rightSection}
        className="flex-row items-center space-x-4">
        <ThemeToggleButton />
        <IconButton
          size="sm"
          className="rounded-full"
          icon={
            <Avatar size="sm" bg={colors.secondary}>
              CM
            </Avatar>
          }
          onPress={() => setShowModal(!showModal)}
        />
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
      paddingHorizontal: 10,
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

export default Header;
