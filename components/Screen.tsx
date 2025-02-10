import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";

type Screen = {
  children: ReactNode;
};

export const Screen = ({ children }: Screen) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
});
