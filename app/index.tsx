import { Text, View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { Screen } from "@/components/Screen";

type Screen = {
  children: ReactNode;
};

const Index = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>connect - Learn - inform</Text>
        <Text style={styles.text2}>Do it yourself</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 300,
  },
  text: {
    fontSize: 20,
    fontFamily: "open-sans",
    marginTop: 30,
  },
  text2: {
    fontSize: 20,
    fontFamily: "open-sans",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default Index;
