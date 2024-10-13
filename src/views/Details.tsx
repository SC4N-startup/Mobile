import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Wrap } from '../components/Wrap';
import { Product } from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { favoritesSlice } from '../redux/favourites';
import { ScrollView } from 'react-native-gesture-handler';

export const Details = () => {
    const dispatch = useDispatch();

    const favorites = useSelector((state: RootState) => state.favorites.products);
    
    const route = useRoute();

    const [details, setDetails] = useState(null);

    const getProductDetails = async id => {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: 'GET',
        },
        );

        const data = await response.json();

        setDetails(data);
    };

    useEffect(() => {
        getProductDetails(route.params.id);
    }, [route.params.id]);

    const addToFavourites = (item: any) => {
        dispatch(favoritesSlice.actions.addFavorites(item));
    };

    return (
        <Wrap backgroundColor={'#00364c'}>
            <ScrollView contentContainerStyle={styles.container}>
                <Product
                    name={details?.title}
                    imageUrl={details?.images[0]}
                    price={details?.price}
                    isFavourite={favorites.find(elem => elem.id === details?.id)}
                    onActionPress={() => addToFavourites(details)} onPress={() => { }}/>

                    
                <Text style={styles.description}>{details?.description}</Text>
            </ScrollView>
        </Wrap>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#00364c',
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