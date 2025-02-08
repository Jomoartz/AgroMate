import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

const ListItemSeparator = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: 1,
  },
});
export { ListItemSeparator };
