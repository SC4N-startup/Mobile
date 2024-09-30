import React from "react";
import { Onboard } from './views/Onboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from "./views/SignIn";
import { SignUp } from "./views/SignUp";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const toastConfig = {
  success: (props) => (
    <ErrorToast
    style={styles.successToast}
      {...props}
      text1Style={styles.errorTextStyle}
      text2Style={styles.errorSecondaryTextStyle}
    />
  ),

  error: (props) => (
    <ErrorToast
    style={styles.errorToast}
      {...props}
      text1Style={styles.errorTextStyle}
      text2Style={styles.errorSecondaryTextStyle}
    />
  )
};

export const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboard" component={Onboard} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast config={toastConfig} />
    </>
  );
};

const styles = StyleSheet.create({
  errorToast: {
    top: 60,
    borderLeftColor: 'tomato',
  },
  errorTextStyle: {
    fontSize: 18,
  },
  errorSecondaryTextStyle: {
    fontSize: 16,
  },
  successToast: {
    top: 60,
    borderLeftColor: '#4DC217',
  },
});