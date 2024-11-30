import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components

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

  .total {
    font-weight: bold;
    font-size: 1.2rem;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
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

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ConfirmButton = styled.button`
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

const CancelButton = styled.button`
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

const PaymentConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
  subtotal,
  taxes,
  discount,
  total,
  paymentMethod,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onCancel();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onCancel} aria-label="Close Modal">
          &times;
        </CloseButton>
        <h2>Confirm Payment</h2>
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
            <span>Discount:</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div>
            <span>Payment Method:</span>
            <span>{paymentMethod}</span>
          </div>
        </SummaryDetails>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

PaymentConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  subtotal: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  paymentMethod: PropTypes.string.isRequired,
};

export default PaymentConfirmationModal;
