import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { RestaurantContext } from "../context/RestaurantContext";

export default function RestaurantCard({ restaurant }) {
  const { setSelectedRestaurant } = useContext(RestaurantContext);

  const navigation = useNavigation();
  
  const handlePress = () => {
    setSelectedRestaurant(restaurant);
    navigation.navigate("Details");
  };

  const imageUrl = restaurant.photoUrl;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        {imageUrl ? (
          <Image
            source={{ uri: restaurant.photoUrl }}
            style={styles.cardImage}
          />
        ) : null}
        <Text style={styles.cardTitle}>{restaurant.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    backgroundColor: "grey",
    marginBottom: 16,
  },
  cardImage: {
    width: 350,
    height: 210,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "600",
    padding: 4,
  },
});
