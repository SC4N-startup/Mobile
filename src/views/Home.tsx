import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserIcon from "../assets/icons/user.svg"
import MenuIcon from "../assets/icons/menu.svg"
import ChangeIcon from "../assets/icons/change.svg"
import DetailsIcon from "../assets/icons/details.svg"

export const Home = () => {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Pressable>
                            <UserIcon width={40} height={40} />
                        </Pressable>

                        <View>
                            <Text style={styles.headerSubtitle}>Hello!</Text>

                            <Text style={styles.headerTitle}>Emil</Text>
                        </View>
                    </View>

                    <View style={styles.headerManagementContainer}>
                        <Pressable style={styles.iconButton}>
                            <MenuIcon width={38} height={20} />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.balanceContainer}>
                    <View style={styles.balanceDetails}>
                        <Text style={styles.balanceTitle}>Current Balance</Text>

                        <View style={styles.currentBalanceContainer}>
                            <Text style={styles.currentBalance}>30</Text>

                            <Text style={styles.currency}>scans/month</Text>
                        </View>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.cardManagementContainer}>
                        <Pressable style={styles.cardManagementButton}>
                            <DetailsIcon width={16} height={16} />

                            <Text style={styles.addNewCard}>See Details</Text>
                        </Pressable>

                        <Pressable style={styles.cardManagementButton}>
                            <ChangeIcon width={16} height={16} />

                            <Text style={styles.addNewCard}>Change Plan</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.dragDownLine} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#00364c',
    },
    contentContainer: {
        alignItems: 'center',
        paddingHorizontal: 18,
        gap: 40,
        paddingBottom: 14,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        borderLeftColor: 'rgba(255, 255, 255, 0.2)',
        borderRightColor: 'rgba(255, 255, 255, 0.2)',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 12,
    },
    profile: {
        flexDirection: 'row',
        gap: 12,
    },
    headerSubtitle: {
        color: '#9c929b',
        fontSize: 16,
    },
    headerTitle: {
        color: '#FF9C01',
        fontSize: 18,
        fontWeight: '600',
    },
    headerManagementContainer: {
        flexDirection: 'row',
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    balanceContainer: {
        gap: 24,
        alignItems: 'center',
        width: '100%',
    },
    balanceDetails: {
        alignItems: 'center',
        gap: 12,
    },
    balanceTitle: {
        fontSize: 18,
        color: '#FF9C01',
    },
    currentBalanceContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    currency: {
        fontSize: 20,
        lineHeight: 75,
        textAlignVertical: 'bottom',
        color: '#FF9C01',
    },
    currentBalance: {
        fontSize: 48,
        lineHeight: 59,
        color: '#41BF49',
    },
    cardManagementContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardManagementButton: {
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 14,
        gap: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addNewCard: {
        fontSize: 14,
        color: 'white',
    },
    dragDownLine: {
        width: 64,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 100,
        alignSelf: 'center',
    },
    line: {
        borderWidth: 1,
        width: '90%',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 100,
    },
});