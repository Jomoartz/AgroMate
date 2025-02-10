import { createNavigationContainerRef } from '@react-navigation/native';

type RootStackParamList = {
  [screen: string]: undefined | { params?: undefined };
};

const navigationRef = createNavigationContainerRef<RootStackParamList>();

const navigate = ({ name, params }: { name: string; params?: undefined }) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export { navigate, navigationRef };
