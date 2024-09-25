import React from "react";
import { Header } from "../components/Header";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export const SignUp = () => {
    const navigation = useNavigation();
    
    const handleSignIn = () => {
        navigation.navigate('SignIn');
    };

    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.contentContainer}>
                <Header />

                <View style={styles.formContainer}>
                    <TextInput style={styles.formInput} placeholder="Name" placeholderTextColor='#A9ABB8'></TextInput>

                    <TextInput style={styles.formInput} placeholder="Surname" placeholderTextColor='#A9ABB8'></TextInput>

                    <TextInput style={styles.formInput} placeholder="Email" placeholderTextColor='#A9ABB8'></TextInput>

                    <TextInput style={styles.formInput} secureTextEntry={true} placeholder="Password" placeholderTextColor='#A9ABB8'></TextInput>

                    <Text style={styles.dontHaveAccount}>Already have an account? <Text onPress={handleSignIn} style={styles.signUp}>Sign In</Text></Text>

                    <TouchableOpacity style={styles.signInButton}>
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