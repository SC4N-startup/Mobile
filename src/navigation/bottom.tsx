import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Home } from '../views/Home';

const BottomTab = createBottomTabNavigator();

export const Bottom = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="Home" component={Home} />
    </BottomTab.Navigator>
  );
};