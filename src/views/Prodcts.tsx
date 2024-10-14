import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { favoritesSlice } from "../redux/favourites";
import { Product } from "../components/Product";
import ArrowUp from '../assets/icons/arrow-up.svg';
import ArrowDown from '../assets/icons/arrow-down.svg';
import Clear from '../assets/icons/clear.svg';
import { Wrap } from "../components/Wrap";
import { historySlice } from "../redux/history";

export const Products = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const scrollRef = useRef<FlatList>(null);

    const inputRef = useRef<TextInput>(null);

    const [searchValue, setSearchValue] = useState('');

    const [products, setProducts] = useState([]);

    const favorites = useSelector((state: RootState) => state.favorites.products);

    const getProducts = async (value = '') => {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${searchValue}`, {
            method: 'GET',
        });

        const products = await response.json();

        setProducts(products);
    };

    useEffect(() => {
        getProducts(searchValue);

    }, [searchValue]);

    const addToFavourites = (item: any) => {
        dispatch(favoritesSlice.actions.addFavorites(item));
    };

    const addToHistory = (item: any) => {
        dispatch(historySlice.actions.addToHistory(item));
    };

    return (
        <Wrap backgroundColor={'#00364c'}>
            <View style={styles.container}>
                <View style={styles.inputWrap}>
                    <TextInput
                        ref={inputRef}
                        value={searchValue}
                        style={styles.input}
                        onChangeText={text => setSearchValue(text)}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            inputRef.current?.clear();
                            setSearchValue('');
                        }}>
                        <Clear />
                    </TouchableOpacity>
                </View>

                <FlatList
                    ref={scrollRef}
                    style={styles.scroll}
                    contentContainerStyle={styles.scrollContent}
                    data={products}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => {
                        return (
                            <Product
                                name={item.title}
                                imageUrl={item.images[0].split('\"')[1]}
                                price={item.price}
                                isFavourite={favorites.find(elem => elem.id === item.id)}
                                onActionPress={() => addToFavourites(item)}
                                onPress={() => {
                                    navigation.navigate('Details', { id: item.id })

                                    addToHistory(item);
                                }}
                            />
                        );
                    }}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        scrollRef.current?.scrollToIndex({ index: 0, animated: true })}>
                    <ArrowUp />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { bottom: 42 }]}
                    onPress={() => scrollRef.current?.scrollToEnd()}>
                    <ArrowDown />
                </TouchableOpacity>
            </View>
        </Wrap>
    );
};

const imageSize = Dimensions.get('window').width - 32;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00364c',
        flex: 1,
    },
    inputWrap: {
        backgroundColor: '#C2C2C2',
        marginHorizontal: 16,
        padding: 10,
        borderRadius: 12,
        marginTop: 16,
        flexDirection: 'row',
    },
    input: {
        fontSize: 14,
        flex: 1,
    },
    title: {
        fontSize: 28,
    },
    image: {
        width: imageSize,
        height: imageSize,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    button: {
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 48,
        height: 48,
        position: 'absolute',
        bottom: 100,
        right: 16,
    },
    header: {
        position: 'absolute',
        fontSize: 24,
        fontWeight: '500',
        padding: 10,
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 2, 0.7)',
    },
    scroll: {
        flex: 1,
        padding: 16,
        paddingBottom: 36,
    },
    scrollContent: {
        flexGrow: 1,
        gap: 24,
        paddingBottom: 36,
    },
});