import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../navigation/rootNavigation';
import navigationTheme from '../navigation/navigationTheme';
import { TabNavigator } from '../navigation/AppNavigator';
import { Appnetwork } from '../components/Appnetwork';

const Play = () => {
  return (
    <>
      <Appnetwork />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
};
export { Play };
