import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SmartHome from './src/navigation/DrawerNavigator';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer style={[styles.container]}>
      <SmartHome />
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
