import React, { createContext, useReducer } from "react";
import { toast } from "react-toastify";

export const OrderContext = createContext();

const initialState = {
  orders: [],
};

function orderReducer(state, action) {
  switch (action.type) {
    case "ADD_ORDER":
      // Validate order structure before adding
      if (
        !action.payload.orderId ||
        !Array.isArray(action.payload.items) ||
        typeof action.payload.total !== "number"
      ) {
        console.error("Invalid order structure:", action.payload);
        return state;
      }
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case "UPDATE_ORDER_STATUS":
      // Validate that the status is a valid string
      if (!action.payload.status || typeof action.payload.status !== "string") {
        console.error("Invalid status:", action.payload.status);
        return state;
      }
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload.orderId
            ? { ...order, status: action.payload.status }
            : order
        ),
      };
    default:
      return state;
  }
}

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const addOrder = (order) => {
    try {
      dispatch({ type: "ADD_ORDER", payload: order });
    } catch (error) {
      console.error("Error adding order:", error);
      toast.error("Failed to add order. Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "❌",
      });
    }
  };

  const updateOrderStatus = (orderId, status) => {
    try {
      dispatch({
        type: "UPDATE_ORDER_STATUS",
        payload: { orderId, status },
      });
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Failed to update order status. Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "❌",
      });
    }
  };

  const getOrderById = (orderId) => {
    const order = state.orders.find((order) => order.orderId === orderId);
    if (!order) {
      console.warn(`Order with ID ${orderId} not found.`);
      return null;
    }
    return order;
  };

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        addOrder,
        updateOrderStatus,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
