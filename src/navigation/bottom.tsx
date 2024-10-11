import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Home } from '../views/Home';
import { StyleSheet, Text } from 'react-native';
import HomeIcon from "../assets/icons/home.svg";
import CommunityIcon from "../assets/icons/community.svg";
import ScanIcon from "../assets/icons/scan.svg";
import HeartIcon from "../assets/icons/heart.svg";
import UserIcon from "../assets/icons/user.svg";

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

      <BottomTab.Screen name="Communities" component={Home} options={{
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
      }} />

      <BottomTab.Screen name="Favorites" component={Home} options={{
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