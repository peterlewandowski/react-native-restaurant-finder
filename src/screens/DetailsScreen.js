import React, { useContext } from 'react';
import { Text } from 'react-native'
import { RestaurantContext } from '../context/RestaurantContext';


export default function Details() {
    const { selectedRestaurant } = useContext(RestaurantContext);
    return <Text>{selectedRestaurant.title}</Text>
}