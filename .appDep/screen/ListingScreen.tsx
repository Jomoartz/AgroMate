import { StackNavigationProp } from '@react-navigation/stack';
import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import routes from '../navigation/routes';
import { Cardi } from '../components/Cardi';

import { routeParamList } from '../navigation/routes';
import colors from '../config/colors';

type navigationStack = StackNavigationProp<routeParamList, 'ProductScreen'>;
interface navigationProp {
  navigation: navigationStack;
}
const listings = [
  {
    id: '1',
    title: 'Vintage Lamp',
    price: 45.99,
    images: ['https://example.com/image1.jpg'],
  },
  {
    id: '2',
    title: 'Antique Vase',
    price: 89.50,
    images: ['https://example.com/image2.jpg'],
  },
  {
    id: '3',
    title: 'Wooden Chair',
    price: 120.00,
    images: ['https://example.com/image3.jpg'],
  },
  {
    id: '4',
    title: 'Modern Sofa',
    price: 350.00,
    images: ['https://example.com/image4.jpg'],
  },
  {
    id: '5',
    title: 'Artistic Painting',
    price: 250.00,
    images: ['https://example.com/image5.jpg'],
  },
];

const ListingScreen: React.FC<navigationProp> = ({ navigation }) => {
  return (
    <>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Cardi
            title={item.title}
            subtitle={'$' + item.price}
            imageUrl={item.images[0]}
            // onPress={() => navigation.navigate(routes.PRODUCTSCREEN)}
            numberOfLines={0}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.darkWhite,
  },
});

export { ListingScreen };
