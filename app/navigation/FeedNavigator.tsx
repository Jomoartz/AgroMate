
import { createStackNavigator } from '@react-navigation/stack';
import { ListingScreen } from '../screen/ListingScreen';
import {ProductUpdateScreen} from '../screen/ProductUpdateScreen';

 export type RootStackParamList = {
    ListingScreen: undefined;
    ProductScreen: {
      id: string; 
      uniqueId: string;
      title: string;
      price: string;
      images: string[]; 
      uniqueIds: string[];
      description?: string; 
      productEndPoint: string;
    };
    ProductUpdateScreen: {
      id: string; 
      uniqueId: string;
      title: string;
      price: string;
      images: string[]; 
      uniqueIds: string[];
      description?: string; 
      productEndPoint: string;
    };
  };
  

const Stack = createStackNavigator<RootStackParamList>();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, gestureDirection: 'horizontal' }}
  >
    <Stack.Screen name="ListingScreen" component={ListingScreen} />
    <Stack.Screen name="ProductUpdateScreen" component={ProductUpdateScreen} />
  </Stack.Navigator>
);

export { FeedNavigator };
