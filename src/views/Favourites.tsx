import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Product } from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { favoritesSlice } from '../redux/favourites';
import { useNavigation } from '@react-navigation/native';
import { Wrap } from '../components/Wrap';

export const Favorites = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const favorites = useSelector((state: RootState) => state.favorites.products);

    const addToFavourites = (item: any) => {
        dispatch(favoritesSlice.actions.deleteFavorites(item));
    };

    return (
        <Wrap backgroundColor={'#00364c'}>
            <FlatList contentContainerStyle={styles.favorites}
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
                        onPress={() => navigation.navigate('Details', { id: item.id })}
                    />
                )}
            />
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
});