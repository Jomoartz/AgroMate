import React, { ReactNode } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View, ViewStyle } from 'react-native';
import colors from '../config/colors';

interface ScreenProps {
  children: ReactNode;
  style?: ViewStyle;
}

const Screen: React.FC<ScreenProps> = ({ children, style }) => {
  return (
    <View style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight,
  },
});

export { Screen };
