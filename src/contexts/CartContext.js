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

  const keys1 = Object.keys(custom1).sort();
  const keys2 = Object.keys(custom2).sort();

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (key !== keys2[i]) return false;

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
          (typeof id !== "number" && typeof id !== "string") ||
          typeof name !== "string" ||
          typeof price !== "number"
        ) {
          throw new Error("Invalid item data.");
        }
        // Ensure id is a string for consistent comparison
        const itemId = id.toString();
        // Check if item with same id and customizations exists
        const existingItemIndex = state.items.findIndex(
          (item) =>
            item.id.toString() === itemId &&
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
              { id: itemId, name, price, quantity: 1, customizations },
            ],
          };
        }
      } catch (error) {
        console.error("Error in ADD_ITEM action:", error);
        return state; // Do not modify state on error
      }

    case "REMOVE_ITEM":
      try {
        const { id, customizations } = action.payload;
        const itemId = id.toString();
        return {
          ...state,
          items: state.items.filter(
            (item) =>
              !(
                item.id.toString() === itemId &&
                areCustomizationsEqual(item.customizations, customizations)
              )
          ),
        };
      } catch (error) {
        console.error("Error in REMOVE_ITEM action:", error);
        return state;
      }

    case "INCREASE_QUANTITY":
      try {
        const { id, customizations } = action.payload;
        const itemId = id.toString();
        return {
          ...state,
          items: state.items.map((item) =>
            item.id.toString() === itemId &&
            areCustomizationsEqual(item.customizations, customizations)
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
        const { id, customizations } = action.payload;
        const itemId = id.toString();
        return {
          ...state,
          items: state.items
            .map((item) =>
              item.id.toString() === itemId &&
              areCustomizationsEqual(item.customizations, customizations)
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
      return {
        ...state,
        items: [],
      };

    case "UPDATE_CUSTOMIZATIONS":
      try {
        const { id, oldCustomizations, newCustomizations } = action.payload;
        if (typeof id !== "number" && typeof id !== "string") {
          throw new Error("Invalid payload for UPDATE_CUSTOMIZATIONS.");
        }
        const itemId = id.toString();
        const updatedCartItems = state.items.map((item) => {
          if (
            item.id.toString() === itemId &&
            areCustomizationsEqual(item.customizations, oldCustomizations)
          ) {
            return { ...item, customizations: newCustomizations };
          }
          return item;
        });
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

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const updateCustomizations = (item, newCustomizations) => {
    dispatch({
      type: "UPDATE_CUSTOMIZATIONS",
      payload: {
        id: item.id,
        oldCustomizations: item.customizations,
        newCustomizations,
      },
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
