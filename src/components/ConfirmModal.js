// src/components/ConfirmModal.js

import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

// Fade-in animation for the modal
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components for the Modal
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isModalOpen }) => (isModalOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.modalBg || "#fff"};
  padding: 30px;
  border-radius: ${({ theme }) => theme.borderRadius || "10px"};
  width: 90%;
  max-width: 400px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease-out;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor || "#333"};

  &:hover {
    color: ${({ theme }) => theme.accentColor || "#4a90e2"};
  }
`;

const Message = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.textColor || "#333"};
  text-align: center;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }
`;

const CancelButton = styled.button`
  background-color: #ff4d4d;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;

const ConfirmModal = ({ isModalOpen, title, message, onConfirm, onCancel }) => {
  // Close the modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  // Close the modal on pressing the Esc key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onCancel]);

  return (
    <Overlay
      isModalOpen={isModalOpen}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <ModalContainer>
        <CloseButton onClick={onCancel} aria-label="Close Modal">
          &times;
        </CloseButton>
        <Message>{message}</Message>
        <ButtonContainer>
          <ConfirmButton onClick={onConfirm} aria-label="Confirm">
            Yes
          </ConfirmButton>
          <CancelButton onClick={onCancel} aria-label="Cancel">
            No
          </CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

ConfirmModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  title: PropTypes.string, // Optional, can be used if needed
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmModal;
