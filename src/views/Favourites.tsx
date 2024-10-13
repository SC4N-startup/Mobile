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

    console.log(favorites)

    return (
        <Wrap backgroundColor={'#00364c'}>
            <FlatList contentContainerStyle={styles.favorites}
                data={favorites}
                keyExtractor={item => `${item.idMeal}`}
                renderItem={({ item }) => (
                    <Product
                        name={item.title}
                        imageUrl={item.images[0]}
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#00364c',
    },
});