import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableHighlight, Button, Alert } from 'react-native';
import { SubmitButton, AppForm, AppFormField } from '../components/forms';

import * as Yup from 'yup';
import { Screen } from '../components/Screen';
import { AppFormPicker } from '../components/forms/AppFormPicker';
import { UploadScreen } from './UploadScreen';
import * as ImagePicker from 'expo-image-picker';
import { categories } from './ListEditScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/FeedNavigator';


// interface ProductScreenRoute {
//     id: string; 
//     uniqueId: string;
//     title: string;
//     price: string;
//     images: string[]; 
//     uniqueIds: string[];
//     description?: string; 
//     productEndPoint: string;
// }

// Define the props for the ProductUpdateScreen
type ProductUpdateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductUpdateScreen'>;
type ProductUpdateScreenRouteProp = RouteProp<RootStackParamList, 'ProductUpdateScreen'>;

interface Props {
    route: ProductUpdateScreenRouteProp;
    navigation: ProductUpdateScreenNavigationProp;
}
interface HandleSubmitCategories {
  label: string;
  icon: string;
  backgroundColor: string;
  value: number;
}

interface HandleSubmitListingProp {
  title: string;
  price: number;
  category: HandleSubmitCategories | null;
  description: string;
}


const validationSchema: Yup.ObjectSchema<HandleSubmitListingProp> =
  Yup.object().shape({
    title: Yup.string().required().label('Title'),
    price: Yup.number().required().label('Price'),
    category: Yup.object({
      label: Yup.string().required(),
      icon: Yup.string().required(),
      backgroundColor: Yup.string().required(),
      value: Yup.number().required(),
    })
      .nullable()
      .required('Category is required'),
    description: Yup.string().required().label('Description')
  });

export const ProductUpdateScreen: React.FC<Props> = ({ route }) => {
  const { id, uniqueIds, title, price, images, description, productEndPoint } = route.params;
  const [updateImage, setUpdateImage] = useState(images[0]);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async ( ) => {
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result && result.assets && result.assets.length >0) {
      setUpdateImage(result.assets?.[0]?.uri || images[0]);
    }
    else {
      setUpdateImage(images[0]);
    }
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
  
      <AppForm
        initialValues={{
          title: title,
          price: parseFloat(price),
          category: null,
          description: description ? description : '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <TouchableHighlight onPress={handleImagePick}>
        <Image   source={updateImage ? { uri: updateImage } : {uri:images[0] }} 
        style={styles.image} />

        </TouchableHighlight>
  
        <View style={styles.fieldContainer}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="head"
            name="title"
            placeholder={title}
          />
        </View>
  
        <View style={styles.fieldContainer}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="price"
            placeholder={price}
            keyboardType="numeric"
          />
        </View>
  
        <View style={styles.fieldContainer}>
          <AppFormPicker
            icon={'format-list-bulleted'}
            items={categories}
            name="category"
            placeholder="Select new Category"
          />
        </View>

        <View style={styles.fieldContainer}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="description"
            placeholder={description || ''}
          />
        </View>

        <SubmitButton color="red" title="Submit" />
        <Button color={"green"} title='Logout' onPress={()=>console.log("do this")} />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  image: {
    width: 250,
    height: 250,
    backgroundColor: "grey",
    opacity: 0.4,
  },
  fieldContainer: {
    width: '100%',
  },
});


