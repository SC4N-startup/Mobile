import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboard } from '../views/Onboard';
import { SignIn } from '../views/SignIn';
import { SignUp } from '../views/SignUp';
import { Bottom } from './bottom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Stack = createStackNavigator();

export const Root = () => {
    const token = useSelector((state: RootState) => state.authentication.token);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={token ? 'Bottom' : 'Onboard'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Onboard" component={Onboard} />

                <Stack.Screen name="SignIn" component={SignIn} />

                <Stack.Screen name="SignUp" component={SignUp} />

                <Stack.Screen name="Bottom" component={Bottom} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};