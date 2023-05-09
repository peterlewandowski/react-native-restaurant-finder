import { createContext, useState } from "react";

export const RestaurantContext = createContext();

export function RestaurantContextProvider({ children }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  const value = { selectedRestaurant, setSelectedRestaurant };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
}
