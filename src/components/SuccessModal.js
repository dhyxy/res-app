// src/components/SuccessModal.js

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.modalBg || "#fff"};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  text-align: center;
  position: relative;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #4a90e2;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    font-size: 20px;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const OrderIdText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-top: 10px;
  font-weight: bold;
`;

const NoteText = styled.p`
  font-size: 0.95rem;
  color: #777;
  margin-top: 15px;
  line-height: 1.4;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ActionButton = styled.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:focus {
    outline: 2px solid #4a90e2;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.95rem;
  }
`;

// SuccessModal Component

const SuccessModal = ({ onClose, message, orderId }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/menu");
    onClose(); // Close the modal
  };

  const handleTrackOrder = () => {
    navigate("/order-status", { state: { orderId } });
    onClose(); // Close the modal
  };

  const handleRequestServices = () => {
    navigate("/request-services", { state: { orderId } });
    onClose(); // Close the modal
  };

  // Close the modal when pressing the Esc key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Overlay role="dialog" aria-modal="true" onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close Modal">
          &times;
        </CloseButton>
        <Message>{message}</Message>
        <OrderIdText>Your Order ID: {orderId}</OrderIdText>
        <NoteText>
          Please save this Order ID for future reference. You can use it to
          track your order or request additional services. We recommend taking a
          screenshot for your convenience.
        </NoteText>
        <ButtonContainer>
          <ActionButton onClick={handleContinueShopping}>
            Continue Shopping
          </ActionButton>
          <ActionButton onClick={handleTrackOrder}>Track Order</ActionButton>
          <ActionButton onClick={handleRequestServices}>
            Request Services
          </ActionButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

// PropTypes for SuccessModal
SuccessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
};

export default SuccessModal;
