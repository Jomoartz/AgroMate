import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

type activityIndicatorProps = {
  visible: boolean;
};

const ActivityIndicator = ({ visible = false }: activityIndicatorProps) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LottieView
        style={{ flex: 1 }}
        autoPlay
        loop
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require('../assets/animations/Animation - 1721703080170.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.8,
  },
});

export { ActivityIndicator };
