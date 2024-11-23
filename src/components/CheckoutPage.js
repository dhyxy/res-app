// src/components/CheckoutPage.js

import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { OrderContext } from "../contexts/OrderContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SuccessModal from "./SuccessModal";
import ConfirmModal from "./ConfirmModal";
import menuData from "../utils/menuData";
import GooglePayLogo from "../assets/google-pay-logo.svg";
import ApplePayLogo from "../assets/apple-pay-logo.svg";
import PayPalLogo from "../assets/paypal-logo.svg";
import BackButton from "../components/BackButton";

// Constants
const TAX_RATE = 0.05; // 5% tax
const VALID_DISCOUNT_CODES = {
  SAVE10: 10, // 10% discount
  SAVE20: 20, // 20% discount
};

// Styled Components

const ResponsiveContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const OrderSummary = styled.div`
  background-color: #f9f9f9;
  padding: 25px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto 30px auto;
  max-width: 100%;

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

const SummaryHeading = styled.h2`
  margin-top: 0;
  text-align: center;
  color: #333;
  font-size: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const EmptyCartButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 1rem;
  margin: 20px auto;
  display: block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }

  &:disabled {
    background-color: #ffa6a6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    max-width: 180px;
    margin: 20px auto;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  table-layout: fixed;

  th,
  td {
    padding: 12px 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    vertical-align: top;
    word-wrap: break-word;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
    font-size: 1rem;
  }

  td {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 10px 8px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    display: block;
    thead {
      display: none;
    }

    tbody {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    tr {
      display: block;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #fff;
      padding: 10px;
    }

    td {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      padding: 8px 0;
      border: none;

      &:before {
        content: attr(data-label);
        font-weight: bold;
        margin-right: 10px;
        color: #555;
        flex-shrink: 0;
      }
    }
  }
`;

const CustomizationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin-bottom: 15px;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
    padding-left: 0;
    margin-top: 5px;
  }

  li {
    margin-bottom: 8px;
    color: #333;
  }

  strong {
    font-weight: bold;
    color: #555;
  }

  @media (max-width: 600px) {
    ul {
      margin-left: 0;
      padding-left: 20px;
    }

    li {
      margin-bottom: 5px;
    }
  }
`;

const CustomizationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 600px) {
    align-items: flex-start;
    gap: 5px;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    background-color: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #357ab8;
    }

    &:disabled {
      background-color: #a0c4e3;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 480px) {
    gap: 3px;

    button {
      padding: 4px 8px;
      font-size: 0.9rem;
    }
  }
`;

const Button = styled.button`
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 10px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 0.8rem;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #ff4d4d;
  margin-left: auto;

  &:hover {
    background-color: #cc0000;
  }
`;

const PriceCell = styled.td`
  font-weight: bold;
  color: #4a90e2;
  text-align: right;

  @media (max-width: 600px) {
    text-align: left;
  }
`;

const DiscountContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const DiscountInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`;

const ApplyButton = styled(Button)`
  flex-shrink: 0;
  padding: 10px 14px;

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

const SummaryDetails = styled.div`
  margin-top: 20px;
  font-size: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;

      span:last-child {
        margin-top: 5px;
        font-weight: bold;
      }
    }
  }

  .total {
    font-weight: bold;
    font-size: 1.2rem;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  input {
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    div {
      margin-bottom: 15px;
    }
  }
`;

const PaymentSection = styled.div`
  margin-top: 30px;

  @media (max-width: 600px) {
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const SectionHeading = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

const PaymentOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const PaymentButton = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  align-items: center;
  min-width: 120px;
  justify-content: center;

  img {
    width: 50px;
    height: auto;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    padding: 10px 14px;

    img {
      width: 45px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px 12px;

    img {
      width: 40px;
    }

    min-width: 100px;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0;

  span {
    color: #666;
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    margin: 25px 0;
    span {
      font-size: 0.95rem;
    }
  }
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`;

const CreditCardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 600px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 6px;
  color: #333;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const InputField = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 30px;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1rem;
    margin-top: 25px;
  }
`;

// EditButton Styled Component
const EditButton = styled.button`
  padding: 6px 12px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  align-self: flex-start;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;

// Modal Styles

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.modalBg || "#fff"};
  padding: 30px 25px;
  border-radius: ${({ theme }) => theme.borderRadius || "10px"};
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    margin-top: 0;
    color: #333;
    font-size: 1.5rem;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  .customization-options {
    margin: 20px 0;
    text-align: left;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 8px;
    }
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;

    input {
      margin-right: 10px;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 5px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor || "#333"};

  &:hover {
    color: ${({ theme }) => theme.accentColor || "#4a90e2"};
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`;

const ConfirmButtonStyled = styled.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`;

const CancelButtonStyled = styled.button`
  background-color: #ccc;
  color: #333333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #aaa;
  }

  &:disabled {
    background-color: #e6e6e6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`;

// Main Component

const CheckoutPage = () => {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    updateCustomizations,
  } = useContext(CartContext);

  const { addOrder } = useContext(OrderContext);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [orderId, setOrderId] = useState(null);

  const [isRemoveConfirmOpen, setIsRemoveConfirmOpen] = useState(false);
  const [removeItemIndex, setRemoveItemIndex] = useState(null);

  const navigate = useNavigate();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxes = subtotal * TAX_RATE;
  const discount = subtotal * (discountPercentage / 100);
  const total = subtotal + taxes - discount;

  const handleIncreaseQuantity = (index) => {
    increaseQuantity(index);
  };

  const handleDecreaseQuantity = (index) => {
    decreaseQuantity(index);
  };

  const handleApplyDiscount = () => {
    if (discountPercentage > 0) return; // Prevent applying multiple discounts
    const code = discountCode.trim().toUpperCase();
    if (code in VALID_DISCOUNT_CODES) {
      const discountPerc = VALID_DISCOUNT_CODES[code];
      setDiscountPercentage(discountPerc);
      toast.success(`Discount code "${code}" applied!`, {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "✔️",
      });
      setDiscountCode("");
    } else {
      toast.error("Invalid discount code.", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "❌",
      });
    }
  };

  const generateOrderId = () => {
    return "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.warn("Your cart is empty.", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "⚠️",
      });
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const newOrderId = generateOrderId();
      setOrderId(newOrderId);
      // Save orderId to localStorage
      localStorage.setItem("lastOrderId", newOrderId);
      // Add the order to OrderContext
      addOrder({
        orderId: newOrderId,
        items: items,
        total: total,
        status: "Order Received",
      });
      setIsSuccessModalOpen(true);
      clearCart();
      toast.success("Purchase completed successfully!", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "🎉",
      });
    }, 2000);
  };

  const handlePayment = (method) => {
    if (items.length === 0) {
      toast.warn("Your cart is empty.", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "⚠️",
      });

      return;
    }
    setIsProcessing(true);
    toast.info(`Processing ${method} payment...`, {
      position: "bottom-right",
      autoClose: 1500,
      closeButton: true,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: "💳",
    });

    setTimeout(() => {
      setIsProcessing(false);
      const newOrderId = generateOrderId();
      setOrderId(newOrderId);
      // Save orderId to localStorage
      localStorage.setItem("lastOrderId", newOrderId);
      // Add the order to OrderContext
      addOrder({
        orderId: newOrderId,
        items: items,
        total: total,
        status: "Order Received",
      });
      setIsSuccessModalOpen(true);
      clearCart();
      toast.success(`${method} payment successful!`, {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "✅",
      });
    }, 2000); // Simulate processing delay
  };

  // Handler for Empty Cart Button
  const handleEmptyCart = () => {
    if (items.length === 0) {
      toast.warn("Your cart is already empty.", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "⚠️",
      });

      return;
    }
    setIsConfirmModalOpen(true); // Open the confirmation modal
  };

  // Confirm action to empty the cart
  const confirmEmptyCart = () => {
    clearCart();
    toast.info("Your cart has been emptied.", {
      position: "bottom-right",
      autoClose: 1500,
      closeButton: true,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: "🛒",
    });

    setIsConfirmModalOpen(false);
  };

  // Cancel action to empty the cart
  const cancelEmptyCart = () => {
    setIsConfirmModalOpen(false);
    toast.info("Empty cart action canceled.", {
      position: "bottom-right",
      autoClose: 1500,
      closeButton: true,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: "❌",
    });
  };

  // Customization Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [editSelectedOptions, setEditSelectedOptions] = useState({});

  const handleEditCustomization = (index) => {
    setCurrentEditIndex(index);
    const item = items[index];
    setEditSelectedOptions(item.customizations || {});
    setIsEditModalOpen(true);
  };

  const handleEditCustomizationChange = (category, option, isMultiSelect) => {
    setEditSelectedOptions((prev) => {
      if (isMultiSelect) {
        const currentOptions = prev[category] || [];
        if (currentOptions.includes(option)) {
          // Remove the option
          return {
            ...prev,
            [category]: currentOptions.filter((opt) => opt !== option),
          };
        } else {
          // Add the option
          return {
            ...prev,
            [category]: [...currentOptions, option],
          };
        }
      } else {
        // Single select: set the option
        return {
          ...prev,
          [category]: option,
        };
      }
    });
  };

  const handleConfirmEditCustomization = () => {
    // Validate that for single-select customizations, only one option is selected
    const updatedCustomizations = { ...editSelectedOptions };

    // Ensure that single-select customizations have a single value
    menuData
      .find((menuItem) => menuItem.id === items[currentEditIndex].id)
      ?.customizations.forEach((customization) => {
        if (!customization.removable) {
          if (Array.isArray(updatedCustomizations[customization.name])) {
            updatedCustomizations[customization.name] =
              updatedCustomizations[customization.name][0] || "";
          }
        }
      });

    updateCustomizations(currentEditIndex, updatedCustomizations);
    toast.success("Customization updated successfully!", {
      position: "bottom-right",
      autoClose: 1500,
      closeButton: true,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: "✅",
    });

    setIsEditModalOpen(false);
    setCurrentEditIndex(null);
    setEditSelectedOptions({});
  };

  const handleCancelEditCustomization = () => {
    setIsEditModalOpen(false);
    setCurrentEditIndex(null);
    setEditSelectedOptions({});
    toast.info("Customization edit canceled.", {
      position: "bottom-right",
      autoClose: 1500,
      closeButton: true,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: "❌",
    });
  };

  // Handler for Remove Item Button
  const handleRemoveItem = (index) => {
    setRemoveItemIndex(index);
    setIsRemoveConfirmOpen(true);
  };

  // Confirm action to remove item
  const confirmRemoveItem = () => {
    if (removeItemIndex !== null) {
      const itemName = items[removeItemIndex].name;
      removeItem(removeItemIndex);
      toast.info(`Removed "${itemName}" from your cart.`, {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "🗑️",
      });
      setRemoveItemIndex(null);
      setIsRemoveConfirmOpen(false);
    }
  };

  // Cancel action to remove item
  const cancelRemoveItem = () => {
    setRemoveItemIndex(null);
    setIsRemoveConfirmOpen(false);
    toast.info("Remove item action canceled.", {
      position: "bottom-right",
      autoClose: 1500,
      closeButton: true,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: "❌",
    });
  };

  return (
    <ResponsiveContainer>
      <BackButton />
      <form onSubmit={handleCheckout}>
        {/* Order Summary Section */}
        <OrderSummary>
          <SummaryHeading>Your Order</SummaryHeading>

          {/* Empty Cart Button */}
          <EmptyCartButton
            type="button"
            onClick={handleEmptyCart}
            disabled={isProcessing || items.length === 0}
            aria-label="Empty Cart"
          >
            Empty Cart
          </EmptyCartButton>

          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <TableWrapper>
              <StyledTable>
                <thead>
                  <tr>
                    <th style={{ width: "25%" }}>Item</th>
                    <th style={{ width: "30%" }}>Customization</th>
                    <th style={{ width: "15%" }}>Quantity</th>
                    <th style={{ width: "15%" }}>Price</th>
                    <th style={{ width: "15%" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td data-label="Item">{item.name}</td>
                      {/* Updated Customization Section */}
                      <td data-label="Customization">
                        <CustomizationWrapper>
                          <EditButton
                            type="button"
                            onClick={() => handleEditCustomization(index)}
                            aria-label={`Edit customization for ${item.name}`}
                          >
                            Edit
                          </EditButton>
                          {item.customizations &&
                          Object.keys(item.customizations).length > 0 ? (
                            <CustomizationList>
                              {Object.entries(item.customizations).map(
                                ([category, options]) => {
                                  // Find the corresponding customization in menuData
                                  const customization = menuData
                                    .find((menuItem) => menuItem.id === item.id)
                                    ?.customizations.find(
                                      (cust) => cust.name === category
                                    );

                                  const isMultiSelect =
                                    customization?.removable || false;

                                  return (
                                    <li key={category}>
                                      <strong>{category}:</strong>
                                      {isMultiSelect ? (
                                        <ul>
                                          {Array.isArray(options) &&
                                          options.length > 0 ? (
                                            options.map((option, idx) => (
                                              <li key={idx}>{option}</li>
                                            ))
                                          ) : (
                                            <span>No options selected</span>
                                          )}
                                        </ul>
                                      ) : (
                                        <span>
                                          {options || "No option selected"}
                                        </span>
                                      )}
                                    </li>
                                  );
                                }
                              )}
                            </CustomizationList>
                          ) : (
                            <span>None</span>
                          )}
                        </CustomizationWrapper>
                      </td>

                      <td data-label="Quantity">
                        <QuantityControls>
                          <button
                            type="button"
                            onClick={() => handleDecreaseQuantity(index)}
                            aria-label="Decrease quantity"
                            disabled={isProcessing || item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleIncreaseQuantity(index)}
                            aria-label="Increase quantity"
                            disabled={isProcessing}
                          >
                            +
                          </button>
                        </QuantityControls>
                      </td>
                      <PriceCell data-label="Price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </PriceCell>
                      <td data-label="Action">
                        <RemoveButton
                          type="button"
                          onClick={() => handleRemoveItem(index)}
                          aria-label={`Remove ${item.name}`}
                          disabled={isProcessing}
                        >
                          Remove
                        </RemoveButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </TableWrapper>
          )}
        </OrderSummary>

        {/* Detailed Summary */}
        {items.length > 0 && (
          <OrderSummary>
            <SummaryDetails>
              <div>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div>
                <span>Taxes (5%):</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div>
                <span>Discount ({discountPercentage}%):</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Discount Code Input */}
              <DiscountContainer>
                <DiscountInput
                  type="text"
                  placeholder="Enter discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  aria-label="Discount code"
                />
                <ApplyButton
                  type="button"
                  onClick={handleApplyDiscount}
                  disabled={discountPercentage > 0 || isProcessing}
                  aria-label="Apply Discount Code"
                >
                  Apply
                </ApplyButton>
              </DiscountContainer>
            </SummaryDetails>
          </OrderSummary>
        )}

        {/* Payment Section */}
        {items.length > 0 && (
          <PaymentSection>
            <SectionHeading>Pay with Wallet</SectionHeading>
            <PaymentOptionsContainer>
              <PaymentButton
                type="button"
                onClick={() => handlePayment("PayPal")}
                disabled={isProcessing}
                aria-label="Pay with PayPal"
              >
                <img src={PayPalLogo} alt="PayPal" />
              </PaymentButton>
              <PaymentButton
                type="button"
                onClick={() => handlePayment("Apple Pay")}
                disabled={isProcessing}
                aria-label="Pay with Apple Pay"
              >
                <img src={ApplePayLogo} alt="Apple Pay" />
              </PaymentButton>
              <PaymentButton
                type="button"
                onClick={() => handlePayment("Google Pay")}
                disabled={isProcessing}
                aria-label="Pay with Google Pay"
              >
                <img src={GooglePayLogo} alt="Google Pay" />
              </PaymentButton>
            </PaymentOptionsContainer>

            {/* Separator */}
            <Separator>
              <Line />
              <span>OR</span>
              <Line />
            </Separator>

            {/* Credit Card Form */}
            <CreditCardForm>
              <InputContainer>
                <InputLabel htmlFor="name">Name on Card</InputLabel>
                <InputField
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="cardNumber">Card Number</InputLabel>
                <InputField
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </InputContainer>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <InputContainer style={{ flex: 1, minWidth: "150px" }}>
                  <InputLabel htmlFor="expiry">Expiration Date</InputLabel>
                  <InputField
                    type="text"
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    required
                  />
                </InputContainer>
                <InputContainer style={{ flex: 1, minWidth: "100px" }}>
                  <InputLabel htmlFor="cvv">CVV</InputLabel>
                  <InputField
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    required
                  />
                </InputContainer>
              </div>
            </CreditCardForm>
          </PaymentSection>
        )}

        {/* Checkout Button */}
        {items.length > 0 && (
          <CheckoutButton type="submit" disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Complete Purchase"}
          </CheckoutButton>
        )}

        {/* Success Modal */}
        {isSuccessModalOpen && (
          <SuccessModal
            message="Order successfully placed!"
            orderId={orderId}
            onClose={() => setIsSuccessModalOpen(false)}
          />
        )}

        {/* Confirm Modal for Empty Cart */}
        {isConfirmModalOpen && (
          <ConfirmModal
            message="Are you sure you want to empty your cart?"
            onConfirm={confirmEmptyCart}
            onCancel={cancelEmptyCart}
          />
        )}

        {/* Confirm Modal for Removing Item */}
        {isRemoveConfirmOpen && removeItemIndex !== null && (
          <ConfirmModal
            message={`Are you sure you want to remove "${items[removeItemIndex].name}" from your cart?`}
            onConfirm={confirmRemoveItem}
            onCancel={cancelRemoveItem}
          />
        )}

        {/* Edit Customization Modal */}
        {isEditModalOpen && currentEditIndex !== null && (
          <ModalOverlay
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                handleCancelEditCustomization();
              }
            }}
            role="dialog"
            aria-modal="true"
          >
            <ModalContent>
              <CloseButton
                onClick={handleCancelEditCustomization}
                aria-label="Close Edit Customization Modal"
              >
                &times;
              </CloseButton>
              <h2>Edit Customization for {items[currentEditIndex].name}</h2>
              {/* Fetch the item's customization options from menuData */}
              {menuData
                .find((menuItem) => menuItem.id === items[currentEditIndex].id)
                ?.customizations.map((customization, idx) => (
                  <div key={idx} className="customization-options">
                    <h4>{customization.name}</h4>
                    {customization.options.map((option, optionIdx) => (
                      <label key={optionIdx}>
                        <input
                          type={customization.removable ? "checkbox" : "radio"}
                          name={customization.name}
                          value={option}
                          checked={
                            customization.removable
                              ? Array.isArray(
                                  editSelectedOptions[customization.name]
                                ) &&
                                editSelectedOptions[
                                  customization.name
                                ].includes(option)
                              : editSelectedOptions[customization.name] ===
                                option
                          }
                          onChange={() =>
                            handleEditCustomizationChange(
                              customization.name,
                              option,
                              customization.removable
                            )
                          }
                          aria-label={
                            customization.removable
                              ? `Toggle ${option}`
                              : `Select ${option}`
                          }
                        />
                        {customization.removable
                          ? ` Remove ${option}`
                          : ` Select ${option}`}
                      </label>
                    ))}
                  </div>
                ))}
              <div className="buttons">
                <CancelButtonStyled onClick={handleCancelEditCustomization}>
                  Cancel
                </CancelButtonStyled>
                <ConfirmButtonStyled
                  onClick={handleConfirmEditCustomization}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Updating..." : "Update"}
                </ConfirmButtonStyled>
              </div>
            </ModalContent>
          </ModalOverlay>
        )}
      </form>
    </ResponsiveContainer>
  );
};

export default CheckoutPage;
