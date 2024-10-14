import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Wrap } from '../components/Wrap';
import { Product } from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { favoritesSlice } from '../redux/favourites';
import { Pressable, ScrollView } from 'react-native-gesture-handler';
import BackIcon from '../assets/icons/back.svg';

export const Details = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const favorites = useSelector((state: RootState) => state.favorites.products);

    const route = useRoute();

    const [details, setDetails] = useState(null);

    const getProductDetails = async id => {
        const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
            {
                method: 'GET',
            },
        );

        const data = await response.json();

        setDetails(data.drinks[0]);
    };

    useEffect(() => {
        getProductDetails(route.params.id);
    }, [route.params.id]);

    const addToFavourites = (item: any) => {
        dispatch(favoritesSlice.actions.addFavorites(item));
    };

    return (
        <Wrap backgroundColor={'#00364c'}>
            <ScrollView contentContainerStyle={styles.container}
                style={styles.scroll}>
                <Pressable onPress={() => navigation.navigate('AllProducts')}>
                    <BackIcon width={32} height={32} />
                </Pressable>

                <Product
                    name={details?.strDrink}
                    imageUrl={details?.strDrinkThumb}
                    isFavourite={favorites.find(elem => elem.idDrink === details?.idDrink)}
                    onActionPress={() => addToFavourites(details)} onPress={() => { }} />

                <Text style={styles.description}>{details?.strInstructions}</Text>
            </ScrollView>
        </Wrap>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#00364c',
    },
    scroll: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    details: {
        position: 'absolute',
        right: 16,
        top: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        fontSize: 20,
    },
    description: {
        padding: 12,
        color: 'white',
        fontSize: 22,
        textAlign: 'justify',
    },
    button: {
        backgroundColor: 'tomato',
        borderRadius: 24,
        padding: 16,
        marginTop: 24,
    },
});