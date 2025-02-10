import { ComponentProps } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { SubmitButton, AppForm, AppFormField } from '../components/forms';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Screen } from '../components/Screen';
import { AppFormPicker } from '../components/forms/AppFormPicker';
import { FormImagePicker } from '../components/forms/FormImagePicker';

interface categories {
  label: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
  backgroundColor: string;
  value: number;
}

interface handleSubmitCategories {
  label: string;
  icon: string;
  backgroundColor: string;
  value: number;
}

interface handleSubmitListingProp {
  title: string;
  price: number;
  category: handleSubmitCategories | null;
  description: string;
  images: string[];
}

const validationSchema: Yup.ObjectSchema<handleSubmitListingProp> =
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
    description: Yup.string().required().label('Description'),
    images: Yup.array()
      .of(Yup.string().required('Each image must be a valid string'))
      .min(1, 'Please select at least one image')
      .required('Images are required')
      .label('Images'),
  });

const categories: categories[] = [
  {
    label: 'Furniture',
    icon: 'floor-lamp',
    backgroundColor: '#fc5c65',
    value: 1,
  },
  { label: 'Car', icon: 'car', backgroundColor: '#fd9644', value: 2 },
  { label: 'Camera', icon: 'camera', backgroundColor: '#fed330', value: 3 },
  { label: 'Cards', icon: 'cards', backgroundColor: '#26de81', value: 4 },
  {
    label: 'Clothing',
    icon: 'shoe-heel',
    backgroundColor: '#2bcbba',
    value: 5,
  },
  { label: 'Sports', icon: 'basketball', backgroundColor: '#45aaf2', value: 6 },
  {
    label: 'Movies & Music',
    icon: 'headphones',
    backgroundColor: '#4b7bec',
    value: 7,
  },
];

const ListEditScreen = () => {
  const handleSubmit = async () => {
    console.log('list edit submitted');
  };

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: '',
          price: 0,
          category: null,
          description: '',
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <View style={{ width: '100%' }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="head"
            secureTextEntry={false}
            placeholder="Title"
            textContentType="name"
            name="title"
          />
        </View>

        <View style={{ width: '100%' }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="price"
            placeholder="Price"
            keyboardType="numeric"
            secureTextEntry={false}
          />
        </View>

        <View style={{ width: '100%' }}>
          <AppFormPicker
            icon={'format-list-bulleted'}
            items={categories}
            name="category"
            placeholder="Category"
          />
        </View>

        <View style={{ width: '100%' }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={false}
            placeholder="Description"
            name="description"
            icon={''}
          />
        </View>

        <SubmitButton color="red" title="Submit" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export { ListEditScreen, validationSchema, categories };
