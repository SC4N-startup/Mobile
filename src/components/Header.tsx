import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const Header = () => {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />

            <Text style={styles.title}>SC4N</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 12,
        width: 75,
        height: 75,
    },
    title: {
        color: '#41BF49',
        fontSize: 36,
        fontWeight: '600',
    },
});