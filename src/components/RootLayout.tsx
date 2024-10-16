import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '@contexts/theme-context';
import themeColors from '@constants/themeColors';
import StatusBarComponent from './StatusBar';

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  const {isDarkMode} = useTheme();
  const colors = themeColors[isDarkMode ? 'dark' : 'light'];

  return (
    <View>
      <StatusBarComponent />

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Ensure container spans full height
    position: 'relative',
  },
  svgContainer: {
    height: 160, // Adjust height based on the SVG size
    zIndex: -1, // Place SVG behind content
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    // Ensure content is displayed above the SVG
    marginTop: 28, // Add padding if necessary
  },
});

export default RootLayout;
