import React from 'react';

import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import LikeIcon from "../assets/icons/heart.svg";

import FilledLikeIcon from "../assets/icons/filledHeart.svg";

interface Props {
    name: string;
    imageUrl: string;
    isFavourite?: string;
    price,
    onPress: () => void;
    onActionPress?: () => void;
}

export const Product: React.FC<Props> = ({
    name,
    imageUrl,
    isFavourite,
    price,
    onPress,
    onActionPress,
}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.item} onPress={onPress}>
            <Image style={styles.image} source={{ uri: imageUrl }} />

            <View style={styles.headerContainer}>
                <Text style={styles.header}>{name}</Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.details}>{price} $</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onActionPress}>
                {isFavourite ? <FilledLikeIcon width={32} height={32} /> : <LikeIcon width={32} height={32} />}
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    detailsContainer: {
        position: 'absolute',
        right: 16,
        top: 28,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 12,
    },
    details: {
        color: 'white',
        fontSize: 20,
    },
    image: {
        width: Dimensions.get('window').width - 32,
        height: Dimensions.get('window').width - 32,
        borderRadius: 24,
    },
    headerContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        overflow: "hidden",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        padding: 10,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        position: 'absolute',
        left: 16,
        top: 16,
        padding: 10,
    },
    actionText: {
        fontSize: 14,
    },
});