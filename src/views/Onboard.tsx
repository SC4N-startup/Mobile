import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Onboard = () => {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/images/logo.png')} />

                    <Text style={styles.title}>SC4N</Text>
                </View>

                <Image style={styles.cards} source={require('../../assets/images/cards.png')} />

                <Text style={styles.subtitle}>
                    Welcome! Every <Text style={styles.scan}>SC4N</Text>{"\n"}
                    is a step towards a healthier life
                </Text>

                <Text style={styles.slogan}>
                    Empower your journey to better health by making rational choices with every scan
                </Text>

                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueWithEmail}>Continue with email</Text>
                </TouchableOpacity>
            </ScrollView>
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
    scrollContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 12,
        width: 100,
        height: 100,
    },
    title: {
        color: '#41BF49',
        fontSize: 48,
        fontWeight: '600',
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
        height: 75,
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 50,
        justifyContent: 'center',
    },
    continueWithEmail: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
});
