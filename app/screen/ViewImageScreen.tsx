import styles from './Styles';
import { View, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="close" size={60} color="dodgerblue" />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={60}
          color="dodgerblue"
        />
      </View>

      <ImageBackground
        source={require('../assets/chair.jpg')}
        resizeMode="contain"
        style={styles.backgroundimage}
      ></ImageBackground>
    </View>
  );
};
export { ViewImageScreen };
