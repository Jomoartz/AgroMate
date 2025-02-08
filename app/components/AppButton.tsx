import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import colors from '../config/colors';

interface appButtonProp {
  children: string;
  color?: string;
  onPress: () => void;
}
const AppButton = ({ children, color, onPress }: appButtonProp) => {
  return (
    <View style={styles.container}>
      <Button title={children} color={color} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '95%',
    justifyContent: 'center',
    borderRadius: 25,
    overflow: 'hidden',
  },
  text: {
    color: colors.white,
  },
});
export { AppButton };
