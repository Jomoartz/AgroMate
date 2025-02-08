import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { Play } from './app/screen/AppContent';


export default function App() {

  return (

      <GestureHandlerRootView style={{ flex: 1 }}>
        <Play />
      </GestureHandlerRootView>
  );
}
