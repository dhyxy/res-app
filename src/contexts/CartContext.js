// src/contexts/CartContext.js

import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
};

// Helper function to compare two customization objects
const areCustomizationsEqual = (custom1, custom2) => {
  if (!custom1 && !custom2) return true;
  if (!custom1 || !custom2) return false;
  const keys1 = Object.keys(custom1);
  const keys2 = Object.keys(custom2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    const val1 = custom1[key];
    const val2 = custom2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (val1.sort().join(",") !== val2.sort().join(",")) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      try {
        const { id, name, price, customizations } = action.payload;
        if (
          typeof id !== "number" ||
          typeof name !== "string" ||
          typeof price !== "number"
        ) {
          throw new Error("Invalid item data.");
        }
        // Check if item with same id and customizations exists
        const existingItemIndex = state.items.findIndex(
          (item) =>
            item.id === id &&
            areCustomizationsEqual(item.customizations, customizations)
        );
        if (existingItemIndex !== -1) {
          // Item exists, increase quantity
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
          return {
            ...state,
            items: updatedItems,
          };
        } else {
          // New item, add to cart
          return {
            ...state,
            items: [
              ...state.items,
              { id, name, price, quantity: 1, customizations },
            ],
          };
        }
      } catch (error) {
        console.error("Error in ADD_ITEM action:", error);
        return state; // Do not modify state on error
      }

    case "REMOVE_ITEM":
      try {
        if (typeof action.payload !== "number") {
          throw new Error("Invalid payload for REMOVE_ITEM.");
        }
        return {
          ...state,
          items: state.items.filter((item, index) => index !== action.payload),
        };
      } catch (error) {
        console.error("Error in REMOVE_ITEM action:", error);
        return state;
      }

    case "INCREASE_QUANTITY":
      try {
        if (typeof action.payload !== "number") {
          throw new Error("Invalid payload for INCREASE_QUANTITY.");
        }
        return {
          ...state,
          items: state.items.map((item, index) =>
            index === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } catch (error) {
        console.error("Error in INCREASE_QUANTITY action:", error);
        return state;
      }

    case "DECREASE_QUANTITY":
      try {
        if (typeof action.payload !== "number") {
          throw new Error("Invalid payload for DECREASE_QUANTITY.");
        }
        return {
          ...state,
          items: state.items
            .map((item, index) =>
              index === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        };
      } catch (error) {
        console.error("Error in DECREASE_QUANTITY action:", error);
        return state;
      }

    case "CLEAR_CART":
      return initialState;

    case "UPDATE_CUSTOMIZATIONS":
      try {
        const { index, newCustomizations } = action.payload;
        if (
          typeof index !== "number" ||
          typeof newCustomizations !== "object"
        ) {
          throw new Error("Invalid payload for UPDATE_CUSTOMIZATIONS.");
        }
        const updatedCartItems = [...state.items];
        if (!updatedCartItems[index]) {
          throw new Error("Item index out of range.");
        }
        updatedCartItems[index].customizations = newCustomizations;
        return {
          ...state,
          items: updatedCartItems,
        };
      } catch (error) {
        console.error("Error in UPDATE_CUSTOMIZATIONS action:", error);
        return state;
      }

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  const increaseQuantity = (index) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: index });
  };

  const decreaseQuantity = (index) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: index });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const updateCustomizations = (index, newCustomizations) => {
    dispatch({
      type: "UPDATE_CUSTOMIZATIONS",
      payload: { index, newCustomizations },
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        updateCustomizations,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
