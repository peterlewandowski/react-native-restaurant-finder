import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function AddNewRestaurantScreen() {
  const [restaurantName, setRestaurantName] = useState();
  const [newRestaurant, setNewRestaurant] = useState({});

  useEffect(() => {
    if (
      newRestaurant.address, newRestaurant.name) {
      setBtnDisabled(false)
    } else {
        setNewRestaurant({})
    }
  }, [newRestaurant]);

  const sendNewRestaurantInfo = () => {
    if (restaurantName !== undefined) {
      fetch("https://bocacode-intranet-api.web.app/restaurants", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
      })
        .then(() => alert("New restaurant added"))
        .then(() => navigator.navigate("Home"))
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <View>
        <Text> this is add new restaurant screen</Text>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(userText) => setRestaurantName(...newRestaurant, name: userText)}
        />
        <Input
          placeholder="Address"
          onChangeText={(text) => setAddress(...newRestaurant, address: text)}
        />
        <Input
          placeholder="Photo"
          keyboardType="url"
          onChangeText={(text) => setPhoto(...newRestaurant, text)}
        />
        <Input
          placeholder="Rating"
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => setRating(text)}
        />
        <Button title="Create new restaurant" onPress={sendNewRestaurantInfo} />
      </View>
    </>
  );
}
