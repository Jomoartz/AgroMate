import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { Card } from 'react-native-elements';
import colors from '../config/colors';

type cardiProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  numberOfLines?: number;
  onPress?: () => void;
};

const Cardi: React.FC<cardiProps> = ({
  title,
  subtitle,
  imageUrl,
  numberOfLines,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
         {imageUrl ? <Image source={{ uri: imageUrl }} style={styles.cardImage} /> :
         <View style={styles.noImageTextContainer}>
          <Text style={styles.noImageText}>No Image</Text>
        </View>}
          <Card.Divider />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.text} numberOfLines={numberOfLines}>
              {subtitle}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
  },
  cardContainer: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  cardTextContainer: {
    width:'100%',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: 190,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'orange',
  },
  noImageTextContainer: {
    width: '100%',
    height: 190,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.darkWhite,
  },
  noImageText: {
    fontSize: 40,
    fontWeight: 'bold',
    opacity: 0.4,
  },
});

export { Cardi };
