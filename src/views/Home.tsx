import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import GalleryIcon from "../assets/icons/gallery.svg"

const username = "Emil Abdullayev";

export const Home = () => {
    return (
        <SafeAreaView style={styles.backgroundContainer}>

            <View style={styles.contentContainer}>
                <Header />

                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Pressable>
                            <GalleryIcon width={120} height={40} fill={"red"} />
                        </Pressable>

                        <View>
                            <Text style={styles.headerSubtitle}>Hello!</Text>

                            <Text style={styles.headerTitle}>{username}</Text>
                        </View>
                    </View>

                    <View>
                        <Pressable>
                            <Image />
                        </Pressable>

                        <Pressable>
                            <Image />
                        </Pressable>
                    </View>
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
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 48,
    },
    profile: {
        flexDirection: 'row',
        gap: 12,
    },
    galleryContainer: {
        borderRadius: 100,
        backgroundColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
    },
    galleryImage: {
        width: 24,
        height: 24,
    },
    headerSubtitle: {
        color: '#9c929b',
        fontSize: 16,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
    },
});