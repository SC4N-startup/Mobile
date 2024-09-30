import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/Header";
import React from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Onboard = () => {
    const navigation = useNavigation();
    
    const handleContinueWithEmail = () => {
        navigation.navigate('SignIn');
    };

    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <StatusBar backgroundColor='#00364c' />

            <View style={styles.contentContainer}>
                <Header />

                <Image style={styles.cards} source={require('../../assets/images/cards.png')} />

                <Text style={styles.subtitle}>
                    Welcome! Every <Text style={styles.scan}>SC4N</Text>{"\n"}
                    is a step towards a healthier life
                </Text>

                <Text style={styles.slogan}>
                    Empower your journey to better health by making rational choices with every scan
                </Text>

                <TouchableOpacity onPress={handleContinueWithEmail} style={styles.continueButton}>
                    <Text style={styles.continueWithEmail}>Continue with email</Text>
                </TouchableOpacity>
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
    },
    cards: {
        width: 280,
        height: 280,
    },
    subtitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16,
    },
    scan: {
        color: '#FF9C01',
    },
    slogan: {
        color: '#CDCDE0',
        fontSize: 18,
        paddingHorizontal: 5,
        textAlign: 'center',
        marginBottom: 28,
    },
    continueButton: {
        backgroundColor: '#FF9C01',
        height: 64,
        borderRadius: 16,
        alignItems: 'center',
        paddingHorizontal: 50,
        justifyContent: 'center',
        marginTop: 16,
    },
    continueWithEmail: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
});
