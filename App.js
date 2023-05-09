import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantListScreen from "./src/screens/RestaurantListScreen";
import Details from "./src/screens/DetailsScreen";
import AddNewRestaurantScreen from "./src/screens/AddNewRestaurantScreen";
import { RestaurantContext, RestaurantContextProvider } from "./src/context/RestaurantContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RestaurantContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={RestaurantListScreen} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen
            name="NewRestaurant"
            component={AddNewRestaurantScreen}
          />
        </Stack.Navigator>
      </RestaurantContextProvider>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
