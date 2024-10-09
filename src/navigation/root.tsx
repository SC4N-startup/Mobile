import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboard } from '../views/Onboard';
import { SignIn } from '../views/SignIn';
import { SignUp } from '../views/SignUp';
import { Bottom } from './bottom';

const Stack = createStackNavigator();

export const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Onboard" component={Onboard} />

                <Stack.Screen name="SignIn" component={SignIn} />

                <Stack.Screen name="SignUp" component={SignUp} />

                <Stack.Screen name="Bottom" component={Bottom} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};