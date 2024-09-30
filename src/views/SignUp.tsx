import React, { useRef, useState } from "react";
import { Header } from "../components/Header";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export const SignUp = () => {
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState(null);
    
    const [lastName, setLastName] = useState(null);

    const [email, setEmail] = useState(null);
    
    const [password, setPassword] = useState(null);

    const navigateToSignin = () => {
        navigation.navigate('SignIn');
    };

    const signUp = async () => {
        await fetch('http://localhost:8080/api/v1/authentication/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }),
        }).then(res => res.text())
        .then(data => console.log(data))
        .then(() => navigateToSignin());
    };

    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.contentContainer}>
                <Header />

                <View style={styles.formContainer}>
                    <TextInput onChangeText={(text) => setFirstName(text)} style={styles.formInput} placeholder="First Name" placeholderTextColor='#A9ABB8'></TextInput>

                    <TextInput onChangeText={(text) => setLastName(text)} style={styles.formInput} placeholder="Last Name" placeholderTextColor='#A9ABB8'></TextInput>

                    <TextInput onChangeText={(text) => setEmail(text)} style={styles.formInput} placeholder="Email" placeholderTextColor='#A9ABB8'></TextInput>

                    <TextInput onChangeText={(text) => setPassword(text)} style={styles.formInput} secureTextEntry={true} placeholder="Password" placeholderTextColor='#A9ABB8'></TextInput>

                    <Text style={styles.dontHaveAccount}>Already have an account? <Text onPress={navigateToSignin} style={styles.signUp}>Sign In</Text></Text>

                    <TouchableOpacity onPress={signUp} style={styles.signInButton}>
                        <Text style={styles.signIn}>Sign Up</Text>
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
        width: '100%',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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