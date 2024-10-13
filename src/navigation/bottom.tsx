import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Home } from '../views/Home';
import { StyleSheet, Text } from 'react-native';
import HomeIcon from "../assets/icons/home.svg";
import HeartIcon from "../assets/icons/heart.svg";
import UserIcon from "../assets/icons/user.svg";
import ProductIcon from "../assets/icons/products.svg";
import { Products } from '../views/Prodcts';
import { ProductsNavigation } from './ProductsNavigation';
import { Favorites } from '../views/Favourites';

const BottomTab = createBottomTabNavigator();

export const Bottom = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.navigator }}>
      <BottomTab.Screen name="Home" component={Home} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? '#41BF49' : '#FF9C01', fontSize: 14, fontWeight: '600' }}>Home</Text>
        ),
        tabBarIcon: () => (
          <HomeIcon width={20} height={20} />
        ),
      }} />

      {/* <BottomTab.Screen name="Communities" component={Home} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.labelText, { color: focused ? '#41BF49' : '#FF9C01' }]}>Communities</Text>
        ),
        tabBarIcon: () => (
          <CommunityIcon width={24} height={24} />
        ),
      }} />

      <BottomTab.Screen name="Scan" component={Home} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.labelText, { color: focused ? '#41BF49' : '#FF9C01' }]}>Scan</Text>
        ),
        tabBarIcon: () => (
          <ScanIcon width={24} height={24} />
        ),
      }} /> */}

      <BottomTab.Screen name="Products" component={ProductsNavigation} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.labelText, { color: focused ? '#41BF49' : '#FF9C01' }]}>Products</Text>
        ),
        tabBarIcon: () => (
          <ProductIcon width={24} height={24} />
        ),
      }} />

      <BottomTab.Screen name="Favorites" component={Favorites} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.labelText, { color: focused ? '#41BF49' : '#FF9C01' }]}>Favorites</Text>
        ),
        tabBarIcon: () => (
          <HeartIcon width={24} height={24} />
        ),
      }} />

      <BottomTab.Screen name="Profile" component={Home} options={{
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.labelText, { color: focused ? '#41BF49' : '#FF9C01' }]}>Profile</Text>
        ),
        tabBarIcon: () => (
          <UserIcon width={24} height={24} />
        ),
      }} />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#00364c',
    borderTopWidth: 0,
  },
  labelText: {
    fontSize: 12,
    fontWeight: '600',
  },
});