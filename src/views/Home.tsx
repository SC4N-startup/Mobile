import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import UserIcon from "../assets/icons/user.svg";
import ChangeIcon from "../assets/icons/change.svg";
import DetailsIcon from "../assets/icons/details.svg";
import ProductIcon from "../assets/icons/product.svg";
import LogoutIcon from "../assets/icons/logout.svg";
import { Wrap } from "../components/Wrap";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { jwtDecode } from "jwt-decode";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "react-native-screens";

export const Home = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');

    const [balance, setBalance] = useState(0);

    const [history, setHistory] = useState([]);

    const token = useSelector((state: RootState) => state.authentication.token);

    const recents = useSelector((state: RootState) => state.history.history);

    const getUser = async () => {
        try {
            const decodedToken = jwtDecode(token);

            const id = decodedToken.userId;

            const response = await fetch(`http://localhost:8080/api/v1/user/${id}`, {
                method: 'GET'
            });

            const user = await response.json();

            setUsername(`${user.firstName} ${user.lastName}`);

            setBalance(user.balance);
        } catch (error) {
            navigation.navigate('SignIn');
        }
    };

    const logout = () => {
        navigation.navigate('SignIn');
    };

    useEffect(() => {
        getUser();
    },);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.transaction}>
                <View style={styles.profile}>
                    <View style={styles.galleryContainer}>
                        <ProductIcon width={24} height={24} />
                    </View>

                    <Pressable onPress={() => navigation.navigate('Products', { screen: 'Details', params: { id: item.id } })} style={styles.transactionMainInfo}>
                        <Text style={styles.transactionName}>{item.title}</Text>
                    </Pressable>
                </View>

                <View style={styles.transactionDetails}>
                    <Text style={styles.transactionsAmount}>$</Text>

                    <Text style={styles.transactionsAmount}>{item.price}</Text>
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

                            <Text style={styles.headerTitle}>{username}</Text>
                        </View>
                    </View>

                    <View style={styles.headerManagementContainer}>
                        <Pressable onPress={logout} style={styles.iconButton}>
                            <LogoutIcon width={40} height={32} />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.balanceContainer}>
                    <View style={styles.balanceDetails}>
                        <Text style={styles.balanceTitle}>Current Balance</Text>

                        <View style={styles.currentBalanceContainer}>
                            <Text style={styles.currentBalance}>{balance}</Text>

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
                    <Text style={styles.transactionsTitle}>Recently viewed</Text>
                </View>

                <FlatList
                    data={recents}
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
        flexWrap: 'wrap',
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