import React from "react";
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserIcon from "../assets/icons/user.svg";
import MenuIcon from "../assets/icons/menu.svg";
import ChangeIcon from "../assets/icons/change.svg";
import DetailsIcon from "../assets/icons/details.svg";
import ProductIcon from "../assets/icons/product.svg";
import { Wrap } from "../components/Wrap";

const transactionsData = [
    {
        id: 1,
        name: 'Bread',
        time: 120,
        amount: 1,
    },
    {
        id: 2,
        name: 'Milk',
        time: 120,
        amount: 3,
    },
    {
        id: 3,
        name: 'Bread',
        time: 120,
        amount: 57,
    },
    {
        id: 4,
        name: 'Milk',
        time: 120,
        amount: 110,
    },
    {
        id: 5,
        name: 'Meat',
        time: 120,
        amount: 200,
    },
    {
        id: 6,
        name: 'Cheese',
        time: 120,
        amount: 200,
    },
    {
        id: 7,
        name: 'Oil',
        time: 120,
        amount: 200,
    },
    {
        id: 8,
        name: 'Apple',
        time: 120,
        amount: 200,
    },
    {
        id: 9,
        name: 'Orange',
        time: 120,
        amount: 200,
    },
    {
        id: 10,
        name: 'Potato',
        time: 120,
        amount: 200,
    },
];

export const Home = () => {
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.transaction}>
                <View style={styles.profile}>
                    <View style={styles.galleryContainer}>
                        <ProductIcon width={24} height={24} />
                    </View>

                    <View style={styles.transactionMainInfo}>
                        <Text style={styles.transactionName}>{item.name}</Text>

                        <Text style={styles.transactionTime}>{item.time} ago</Text>
                    </View>
                </View>

                <View style={styles.transactionDetails}>
                    <Text style={styles.transactionsAmount}>$</Text>

                    <Text style={styles.transactionsAmount}>{item.amount}</Text>
                </View>
            </View>
        );
    };

    return (
        <Wrap style={styles.container} backgroundColor={'#00364c'}>
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

            <View style={styles.recentTransactionsContainer}>
                <View style={styles.transactionsHeader}>
                    <Text style={styles.transactionsTitle}>Recent Scans</Text>

                    <Text style={styles.showAll}>Show All</Text>
                </View>

                <FlatList
                    data={transactionsData}
                    renderItem={renderItem}
                    style={styles.transactions}
                    contentContainerStyle={styles.historyContainer}
                    showsVerticalScrollIndicator={false} />
            </View>
        </Wrap>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00364c',
        flex: 1,
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
    recentTransactionsContainer: {
        flex: 1,
        gap: 24,
        paddingHorizontal: 18,
        marginTop: 20,
    },
    transactionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionsTitle: {
        fontSize: 20,
        lineHeight: 24.6,
        color: '#FF9C01',
    },
    showAll: {
        fontSize: 16,
        lineHeight: 19.7,
        color: '#41BF49',
    },
    transaction: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    transactionName: {
        color: 'white',
        fontSize: 16,
        lineHeight: 19.7,
    },
    transactionTime: {
        color: '#9c929b',
        fontSize: 16,
    },
    transactionMainInfo: {
        gap: 6,
    },
    transactionDetails: {
        flexDirection: 'row',
    },
    transactionsAmount: {
        fontSize: 20,
        lineHeight: 24.6,
        color: 'white',
    },
    transactions: {
        flex: 1,
    },
    galleryContainer: {
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)'
    },
    historyContainer: {
        gap: 24,
        flexGrow: 1,
    },
});