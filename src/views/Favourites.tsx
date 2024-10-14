import React, { useRef } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { favoritesSlice } from '../redux/favourites';
import { useNavigation } from '@react-navigation/native';
import { Wrap } from '../components/Wrap';
import ArrowUp from '../assets/icons/arrow-up.svg';
import ArrowDown from '../assets/icons/arrow-down.svg';
import { historySlice } from '../redux/history';

export const Favorites = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const scrollRef = useRef<FlatList>(null);

    const favorites = useSelector((state: RootState) => state.favorites.products);

    const addToFavourites = (item: any) => {
        dispatch(favoritesSlice.actions.deleteFavorites(item));
    };

    const addToHistory = (item: any) => {
        dispatch(historySlice.actions.addToHistory(item));
    };

    return (
        <Wrap backgroundColor={'#00364c'}>
            <FlatList contentContainerStyle={styles.favorites}
                ref={scrollRef}
                style={styles.scroll}
                data={favorites}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                    <Product
                        name={item.title}
                        imageUrl={item.images[0].split('\"')[1]}
                        price={item.price}
                        isFavourite={favorites.find(elem => elem.id === item.id)}
                        onActionPress={() => addToFavourites(item)}
                        onPress={() => {
                            navigation.navigate('Products', { screen: 'Details', params: { id: item.id } })

                            addToHistory(item);
                        }}
                    />
                )}
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
        </Wrap>
    );
};

const styles = StyleSheet.create({
    favorites: {
        flexGrow: 1,
        gap: 24,
        backgroundColor: '#00364c',
        paddingBottom: 36,
    },
    scroll: {
        flex: 1,
        padding: 16,
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
});