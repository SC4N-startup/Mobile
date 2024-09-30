import React, { useRef, useState } from "react";
import { Header } from "../components/Header";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native-toast-message";

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').width;

export const SignIn = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);

    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
    };

    const signIn = async () => {
        let statusCode;

        let token;

        await fetch('http://localhost:8080/api/v1/authentication/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(res => {
            statusCode = res.status;

            return res.text();
        })
            .then(data => token = data);

        if (statusCode !== 200 && statusCode !== 201) {
            Toast.show({
                type: 'error',
                text1: 'Login failed!',
                text2: 'Invalid email or password was entered.'
            });

            return;
        }

        if (token) {
            Toast.show({
                type: 'success',
                text1: 'Login succeeded!',
                text2: 'User signed in successfully.'
            });
            
            await AsyncStorage.setItem('access-token', token);

            navigation.navigate('Onboard');
        }
    };

    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.contentContainer}>
                <Header />

                <View style={styles.formContainer}>
                    <TextInput onChangeText={(text) => setEmail(text)} style={styles.formInput} placeholder="Email" placeholderTextColor='#A9ABB8'></TextInput>

                    <TextInput onChangeText={(text) => setPassword(text)} style={styles.formInput} secureTextEntry={true} placeholder="Password" placeholderTextColor='#A9ABB8'></TextInput>

                    <Text style={styles.dontHaveAccount}>Don't have an account? <Text onPress={navigateToSignUp} style={styles.signUp}>Sign Up</Text></Text>

                    <TouchableOpacity onPress={signIn} style={styles.signInButton}>
                        <Text style={styles.signIn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        margin: 'auto',
        flex: 1,
        backgroundColor: '#00364c',
        width: width,
        height: height,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        width: width,
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
    formInput: {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#001924',
        marginBottom: 24,
        width: '80%',
        height: 64,
        borderRadius: 12,
        padding: 12,
    },
    dontHaveAccount: {
        fontSize: 16,
        color: '#CDCDE0',
    },
    signUp: {
        color: '#FF9C01',
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    signInButton: {
        backgroundColor: '#FF9C01',
        height: 64,
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 50,
        justifyContent: 'center',
        marginTop: 40,
    },
    signIn: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
});