import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Wrap = ({ children, backgroundColor, style }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, style]}>
            <View style={{ paddingTop: insets?.top ?? 0, backgroundColor }} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00364c'
    },
});