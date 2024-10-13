import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Details} from '../views/Details';
import { Products } from '../views/Prodcts';

const Stack = createStackNavigator();

export const ProductsNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="AllProducts"
          component={Products}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
  );
};