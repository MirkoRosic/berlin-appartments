import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigation';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
