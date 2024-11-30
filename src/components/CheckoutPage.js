// src/pages/CheckoutPage.js

import React, { useState, useContext, useMemo } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { OrderContext } from "../contexts/OrderContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";
import ConfirmModal from "../components/ConfirmModal";
import PaymentConfirmationModal from "../components/PaymentConfirmationModal";
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

  &:focus {
    outline: 2px solid #4a90e2;
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
      outline: 2px solid #4a90e2;
    }
  }

  span {
    font-size: 1rem;
    color: #333;
  }

  @media (max-width: 480px) {
    gap: 3px;

    button {
      padding: 4px 8px;
      font-size: 0.9rem;
    }

    span {
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
  align-self: flex-start;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 0.8rem;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #ff4d4d;

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
    width: 100%;
  }
`;

const ApplyButton = styled.button`
  padding: 10px 12px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  flex-shrink: 0;
  margin-top: 10px;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
    margin-top: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
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

  &:focus {
    outline: 2px solid #4a90e2;
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
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1rem;
    margin-top: 25px;
  }
`;

// EditButton Styled Component
const EditButtonStyled = styled.button`
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
    outline: 2px solid #4a90e2;
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

const ModalContentStyled = styled.div`
  background: #fff;
  padding: 30px 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  position: relative;
  display: flex;
  flex-direction: column;

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
  color: #333;

  &:hover {
    color: #4a90e2;
  }

  &:focus {
    outline: 2px solid #4a90e2;
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
    outline: 2px solid #4a90e2;
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
    outline: 2px solid #ccc;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`;

// Helper Functions for Validation

const validateCardNumber = (number) => {
  const sanitized = number.replace(/\s+/g, "");
  const regex = /^\d{16}$/;
  if (!regex.test(sanitized)) {
    return false;
  }
  // Luhn Algorithm for additional validation
  let sum = 0;
  for (let i = 0; i < 16; i++) {
    let digit = parseInt(sanitized.charAt(15 - i), 10);
    if (i % 2 === 1) digit *= 2;
    if (digit > 9) digit -= 9;
    sum += digit;
  }
  return sum % 10 === 0;
};

const validateExpiryDate = (expiry) => {
  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!regex.test(expiry)) return false;
  const [month, year] = expiry.split("/").map((part) => parseInt(part, 10));
  const currentDate = new Date();
  const currentYear = parseInt(
    currentDate.getFullYear().toString().slice(-2),
    10
  );
  const currentMonth = currentDate.getMonth() + 1;

  if (year < currentYear) return false;
  if (year === currentYear && month < currentMonth) return false;

  return true;
};

const validateCVV = (cvv) => {
  const regex = /^\d{3,4}$/;
  return regex.test(cvv);
};

const validateName = (name) => {
  const regex = /^[a-zA-Z\s'-]+$/;
  return regex.test(name);
};

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
  const [removeItemData, setRemoveItemData] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState(null);

  const [isPaymentConfirmModalOpen, setIsPaymentConfirmModalOpen] =
    useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );
  const taxes = useMemo(() => subtotal * TAX_RATE, [subtotal]);
  const discount = useMemo(
    () => subtotal * (discountPercentage / 100),
    [subtotal, discountPercentage]
  );
  const total = useMemo(
    () => subtotal + taxes - discount,
    [subtotal, taxes, discount]
  );

  const handleIncreaseQuantity = (item) => {
    increaseQuantity(item);
  };

  const handleDecreaseQuantity = (item) => {
    decreaseQuantity(item);
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

    // Validate Credit Card Information
    const nameOnCard = cardDetails.name.trim();
    const cardNumber = cardDetails.cardNumber.trim();
    const expiryDate = cardDetails.expiry.trim();
    const cvv = cardDetails.cvv.trim();

    let validationErrorsExist = false;

    if (nameOnCard === "") {
      setValidationErrors((prev) => ({
        ...prev,
        nameOnCard: "Name on card is required.",
      }));
      validationErrorsExist = true;
    }

    if (!validateCardNumber(cardNumber)) {
      setValidationErrors((prev) => ({
        ...prev,
        cardNumber:
          "Invalid card number. Please enter a valid 16-digit card number.",
      }));
      validationErrorsExist = true;
    }

    if (!validateExpiryDate(expiryDate)) {
      setValidationErrors((prev) => ({
        ...prev,
        expiryDate: "Invalid expiration date. Please use MM/YY format.",
      }));
      validationErrorsExist = true;
    }

    if (!validateCVV(cvv)) {
      setValidationErrors((prev) => ({
        ...prev,
        cvv: "Invalid CVV. Please enter a 3 or 4-digit CVV.",
      }));
      validationErrorsExist = true;
    }

    if (validationErrorsExist) {
      return;
    }

    // Set payment method and open confirmation modal
    setSelectedPaymentMethod("Credit Card");
    setIsPaymentConfirmModalOpen(true);
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

    setSelectedPaymentMethod(method);
    setIsPaymentConfirmModalOpen(true);
  };

  const processPayment = () => {
    setIsProcessing(true);

    if (selectedPaymentMethod === "Credit Card") {
      // Simulate processing delay for credit card
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
        setIsPaymentConfirmModalOpen(false);
      }, 2000);
    } else {
      // For wallet payments
      toast.info(`Processing ${selectedPaymentMethod} payment...`, {
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
        toast.success(`${selectedPaymentMethod} payment successful!`, {
          position: "bottom-right",
          autoClose: 1500,
          closeButton: true,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: false,
          icon: "✅",
        });
        setIsPaymentConfirmModalOpen(false);
      }, 2000); // Simulate processing delay
    }
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
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [editSelectedOptions, setEditSelectedOptions] = useState({});

  // Updated handleEditCustomization Function
  const handleEditCustomization = (item) => {
    const menuItem = menuData.find(
      (menuItem) => menuItem.id.toString() === item.id.toString()
    );

    // Initialize editSelectedOptions with current customizations or defaults
    const initialCustomizations = {};

    menuItem?.customizations.forEach((customization) => {
      if (customization.removable) {
        initialCustomizations[customization.name] =
          item.customizations?.[customization.name] || [];
      } else {
        initialCustomizations[customization.name] =
          item.customizations?.[customization.name] || customization.options[0];
      }
    });

    setCurrentEditItem(item);
    setEditSelectedOptions(initialCustomizations);
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
    const menuItem = menuData.find(
      (menuItem) => menuItem.id.toString() === currentEditItem.id.toString()
    );
    menuItem?.customizations.forEach((customization) => {
      if (!customization.removable) {
        if (Array.isArray(updatedCustomizations[customization.name])) {
          updatedCustomizations[customization.name] =
            updatedCustomizations[customization.name][0] || "";
        }
      }
    });

    // Validate that required customizations are selected
    const isValid = menuItem?.customizations.every((customization) => {
      if (customization.removable) {
        // At least one option can be selected or none
        return true;
      } else {
        // Exactly one option must be selected
        return (
          updatedCustomizations[customization.name] &&
          typeof updatedCustomizations[customization.name] === "string" &&
          updatedCustomizations[customization.name].trim() !== ""
        );
      }
    });

    if (!isValid) {
      toast.error("Please select all required customization options.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    updateCustomizations(currentEditItem, updatedCustomizations);
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
    setCurrentEditItem(null);
    setEditSelectedOptions({});
  };

  const handleCancelEditCustomization = () => {
    setIsEditModalOpen(false);
    setCurrentEditItem(null);
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
  const handleRemoveItem = (item) => {
    setRemoveItemData(item);
    setIsRemoveConfirmOpen(true);
  };

  // Confirm action to remove item
  const confirmRemoveItem = () => {
    if (removeItemData !== null) {
      const itemName = removeItemData.name;
      removeItem(removeItemData);
      toast.info(`Removed "${itemName}" from your cart.`, {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "🗑️",
      });
      setRemoveItemData(null);
      setIsRemoveConfirmOpen(false);
    }
  };

  // Cancel action to remove item
  const cancelRemoveItem = () => {
    setRemoveItemData(null);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    switch (name) {
      case "name":
        if (value.trim() === "") {
          setValidationErrors((prev) => ({
            ...prev,
            nameOnCard: "Name is required.",
          }));
        } else if (!validateName(value.trim())) {
          setValidationErrors((prev) => ({
            ...prev,
            nameOnCard:
              "Invalid name format. Please enter a valid name using a-z, A-Z, spaces, hyphens, and apostrophes.",
          }));
        } else {
          setValidationErrors((prev) => ({ ...prev, nameOnCard: "" }));
        }
        break;
      case "cardNumber":
        if (!validateCardNumber(value)) {
          setValidationErrors((prev) => ({
            ...prev,
            cardNumber:
              "Invalid card number. Please enter a 16-digit number with spaces in between each group (ex: 4539 1488 0343 6467).",
          }));
        } else {
          setValidationErrors((prev) => ({ ...prev, cardNumber: "" }));
        }
        break;
      case "expiry":
        if (!validateExpiryDate(value)) {
          setValidationErrors((prev) => ({
            ...prev,
            expiryDate:
              "Invalid expiration date. Please enter a valid MM/YY format.",
          }));
        } else {
          setValidationErrors((prev) => ({ ...prev, expiryDate: "" }));
        }
        break;
      case "cvv":
        if (!validateCVV(value)) {
          setValidationErrors((prev) => ({
            ...prev,
            cvv: "Invalid CVV.",
          }));
        } else {
          setValidationErrors((prev) => ({ ...prev, cvv: "" }));
        }
        break;
      default:
        break;
    }
  };

  // Calculate Order Total
  const calculateTotal = () => {
    return (subtotal + taxes - discount).toFixed(2);
  };

  return (
    <ResponsiveContainer>
      <BackButton aria-label="Go Back to Menu" />
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
                  {items.map((item) => (
                    <tr
                      key={`${item.id}-${JSON.stringify(item.customizations)}`}
                    >
                      <td data-label="Item">{item.name}</td>
                      {/* Customization Section */}
                      <td data-label="Customization">
                        <CustomizationWrapper>
                          <EditButtonStyled
                            type="button"
                            onClick={() => handleEditCustomization(item)}
                            aria-label={`Edit customization for ${item.name}`}
                            disabled={isProcessing}
                          >
                            Edit
                          </EditButtonStyled>
                          {item.customizations &&
                          Object.keys(item.customizations).length > 0 ? (
                            <CustomizationList>
                              {Object.entries(item.customizations).map(
                                ([category, options]) => {
                                  // Find the corresponding customization in menuData
                                  const customization = menuData
                                    .find(
                                      (menuItem) =>
                                        menuItem.id.toString() ===
                                        item.id.toString()
                                    )
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
                            onClick={() => handleDecreaseQuantity(item)}
                            aria-label="Decrease quantity"
                            disabled={isProcessing || item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => handleIncreaseQuantity(item)}
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
                          onClick={() => handleRemoveItem(item)}
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
                <span>${calculateTotal()}</span>
              </div>

              {/* Discount Code Input */}
              <DiscountContainer>
                <DiscountInput
                  type="text"
                  placeholder="Enter discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  aria-label="Discount code"
                  maxLength={20}
                />
                <ApplyButton
                  type="button"
                  onClick={handleApplyDiscount}
                  disabled={
                    discountPercentage > 0 ||
                    isProcessing ||
                    discountCode.trim() === ""
                  }
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
                  onChange={handleInputChange}
                  aria-required="true"
                  aria-invalid={validationErrors.nameOnCard ? "true" : "false"}
                />
                {validationErrors.nameOnCard && (
                  <span
                    role="alert"
                    style={{ color: "red", fontSize: "0.8rem" }}
                  >
                    {validationErrors.nameOnCard}
                  </span>
                )}
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="cardNumber">Card Number</InputLabel>
                <InputField
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  required
                  onChange={handleInputChange}
                  aria-required="true"
                  aria-invalid={validationErrors.cardNumber ? "true" : "false"}
                />
                {validationErrors.cardNumber && (
                  <span
                    role="alert"
                    style={{ color: "red", fontSize: "0.8rem" }}
                  >
                    {validationErrors.cardNumber}
                  </span>
                )}
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
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={
                      validationErrors.expiryDate ? "true" : "false"
                    }
                  />
                  {validationErrors.expiryDate && (
                    <span
                      role="alert"
                      style={{ color: "red", fontSize: "0.8rem" }}
                    >
                      {validationErrors.expiryDate}
                    </span>
                  )}
                </InputContainer>
                <InputContainer style={{ flex: 1, minWidth: "100px" }}>
                  <InputLabel htmlFor="cvv">CVV</InputLabel>
                  <InputField
                    type="password"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    required
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={validationErrors.cvv ? "true" : "false"}
                  />
                  {validationErrors.cvv && (
                    <span
                      role="alert"
                      style={{ color: "red", fontSize: "0.8rem" }}
                    >
                      {validationErrors.cvv}
                    </span>
                  )}
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
            isModalOpen={isConfirmModalOpen}
            message="Are you sure you want to empty your cart?"
            onConfirm={confirmEmptyCart}
            onCancel={cancelEmptyCart}
          />
        )}

        {/* Confirm Modal for Removing Item */}
        {isRemoveConfirmOpen && removeItemData !== null && (
          <ConfirmModal
            isModalOpen={isRemoveConfirmOpen}
            message={`Are you sure you want to remove "${removeItemData.name}" from your cart?`}
            onConfirm={confirmRemoveItem}
            onCancel={cancelRemoveItem}
          />
        )}

        {/* Payment Confirmation Modal */}
        {isPaymentConfirmModalOpen && (
          <PaymentConfirmationModal
            isOpen={isPaymentConfirmModalOpen}
            onConfirm={processPayment}
            onCancel={() => setIsPaymentConfirmModalOpen(false)}
            subtotal={subtotal}
            taxes={taxes}
            discount={discount}
            total={total}
            paymentMethod={selectedPaymentMethod}
          />
        )}

        {/* Edit Customization Modal */}
        {isEditModalOpen && currentEditItem !== null && (
          <ModalOverlay
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                handleCancelEditCustomization();
              }
            }}
            role="dialog"
            aria-modal="true"
          >
            <ModalContentStyled>
              <CloseButton
                type="button"
                onClick={handleCancelEditCustomization}
                aria-label="Close Edit Customization Modal"
              >
                &times;
              </CloseButton>
              <h2>Edit Customization for {currentEditItem.name}</h2>
              {/* Fetch the item's customization options from menuData */}
              {menuData
                .find(
                  (menuItem) =>
                    menuItem.id.toString() === currentEditItem.id.toString()
                )
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
                <CancelButtonStyled
                  type="button"
                  onClick={handleCancelEditCustomization}
                >
                  Cancel
                </CancelButtonStyled>
                <ConfirmButtonStyled
                  type="button"
                  onClick={handleConfirmEditCustomization}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Updating..." : "Update"}
                </ConfirmButtonStyled>
              </div>
            </ModalContentStyled>
          </ModalOverlay>
        )}
      </form>
    </ResponsiveContainer>
  );
};

export default CheckoutPage;
