// src/pages/RequestServicesPage.js

import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import { toast } from "react-toastify";
import ConfirmModal from "../components/ConfirmModal"; // Import the ConfirmModal component

// Styled Components

const Container = styled.div`
  padding: 40px 20px; /* Match About Us page padding */
  text-align: center;

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }

  p {
    color: #555;
    margin-bottom: 15px;
  }
`;

const InputContainer = styled.div`
  margin: 20px auto;
  max-width: 500px;
  text-align: left;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${({ hasError }) => (hasError ? "#ff4d4d" : "#ddd")};
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "#ff4d4d" : "#4a90e2")};
  }
`;

// New Styled Component for Centering Buttons
const CenteredButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: ${({ disabled }) => (disabled ? "#a0c4e3" : "#4a90e2")};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#a0c4e3" : "#357ab8")};
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 15px;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 18px;
    height: 18px;
    accent-color: #4a90e2;
  }

  span {
    font-size: 1rem;
    color: #333;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${({ hasError }) => (hasError ? "#ff4d4d" : "#ddd")};
  border-radius: 5px;
  margin-top: 10px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "#ff4d4d" : "#4a90e2")};
  }
`;

const StatusContainer = styled.div`
  margin-top: 30px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const OrderDetails = styled.div`
  margin-top: 20px;
  text-align: left;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;
      font-size: 1rem;
      color: #333;
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  gap: 20px; /* Increased gap between buttons */
  margin-top: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${({ cancel }) => (cancel ? "#ff4d4d" : "#4a90e2")};
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ cancel }) => (cancel ? "#cc0000" : "#357ab8")};
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const SubmitErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 1rem;
  margin-top: 10px;
`;

// Reusable Confirmation Modal Component is replaced by ConfirmModal import

const RequestServicesPage = () => {
  const { getOrderById } = useContext(OrderContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherRequest, setOtherRequest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoVerify, setAutoVerify] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [inputError, setInputError] = useState("");
  const [otherError, setOtherError] = useState("");

  // State for Confirmation Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null); // 'requestAnother' or 'trackOrder' or 'goHome'

  useEffect(() => {
    if (location.state?.orderId && !autoVerify) {
      setOrderId(location.state.orderId);
      handleVerify(location.state.orderId);
      setAutoVerify(true);
    } else if (!location.state?.orderId && autoVerify) {
      // If no orderId is passed and autoVerify was previously true, reset the state
      setOrderId("");
      setTableNumber("");
      setIsVerified(false);
      setSelectedServices([]);
      setOtherRequest("");
      setOrderDetails(null);
      setAutoVerify(false);
      setInputError("");
      setOtherError("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, autoVerify]);

  const validateOrderId = (id) => {
    // Example validation: alphanumeric and length between 5 and 15
    const regex = /^[a-zA-Z0-9]{5,15}$/;
    return regex.test(id);
  };

  const validateTableNumber = (number) => {
    const regex = /^\d+$/;
    return regex.test(number);
  };

  const handleVerify = (id = orderId) => {
    const trimmedId = id.trim();
    const trimmedTableNumber = tableNumber.trim();

    if (trimmedId !== "") {
      if (!validateOrderId(trimmedId)) {
        setInputError(
          "Invalid Order ID format. It should be alphanumeric and 5-15 characters long."
        );
        toast.warn("Invalid Order ID format.", {
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

      try {
        const order = getOrderById(trimmedId);
        if (order) {
          setIsVerified(true);
          setOrderDetails(order);
          setInputError("");
          toast.success("Order ID verified!", {
            position: "bottom-right",
            autoClose: 1500,
            closeButton: true,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: false,
            icon: "✅",
          });
        } else {
          setIsVerified(false);
          setOrderDetails(null);
          setInputError("Order not found. Please check your Order ID.");
          toast.error("Invalid Order ID. Please check and try again.", {
            position: "bottom-right",
            autoClose: 3000,
            closeButton: true,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: false,
            icon: "❌",
          });
        }
      } catch (error) {
        setIsVerified(false);
        setOrderDetails(null);
        setInputError("An unexpected error occurred. Please try again later.");
        toast.error("An unexpected error occurred. Please try again later.", {
          position: "bottom-right",
          autoClose: 3000,
          closeButton: true,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: false,
          icon: "❌",
        });
        console.error("Error verifying order ID:", error);
      }
    } else if (trimmedTableNumber !== "") {
      if (!validateTableNumber(trimmedTableNumber)) {
        setInputError("Invalid Table Number. Please enter a valid number.");
        toast.warn("Invalid Table Number. Please enter a valid number.", {
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
      setIsVerified(true);
      setOrderDetails(null);
      setInputError("");
      toast.success("Table number verified!", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "✅",
      });
    } else {
      setInputError("Please enter your Order ID or Table Number.");
      toast.warn("Please enter your Order ID or Table Number.", {
        position: "bottom-right",
        autoClose: 1500,
        closeProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "⚠️",
      });
    }
  };

  const handleServiceChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmitRequest = () => {
    const trimmedOtherRequest = otherRequest.trim();
    if (selectedServices.includes("Other") && trimmedOtherRequest === "") {
      setOtherError("Please specify your other request.");
      toast.warn("Please specify your other request.", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "⚠️",
      });
      return;
    } else {
      setOtherError("");
    }

    if (selectedServices.length === 0 && trimmedOtherRequest === "") {
      setOtherError(
        "Please select at least one service or enter a custom request."
      );
      toast.warn(
        "Please select at least one service or enter a custom request.",
        {
          position: "bottom-right",
          autoClose: 1500,
          closeButton: true,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: false,
          icon: "⚠️",
        }
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your service requests have been submitted!", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "✅",
      });
      // Reset all states
      setOrderId("");
      setTableNumber("");
      setIsVerified(false);
      setSelectedServices([]);
      setOtherRequest("");
      setOrderDetails(null);
      setAutoVerify(false);
      setInputError("");
      setOtherError("");
    }, 2000);
  };

  const handleRequestAnotherService = () => {
    // Open confirmation modal
    setModalAction("requestAnother");
    setIsModalOpen(true);
  };

  const handleTrackOrder = () => {
    // Open confirmation modal
    setModalAction("trackOrder");
    setIsModalOpen(true);
  };

  const handleGoHome = () => {
    // Open confirmation modal for going home
    setModalAction("goHome");
    setIsModalOpen(true);
  };

  const confirmAction = () => {
    if (modalAction === "requestAnother") {
      // Navigate to /request-services without state to initiate a new request
      navigate("/request-services");
    } else if (modalAction === "trackOrder") {
      if (isVerified && orderDetails) {
        navigate("/order-status", { state: { orderId: orderDetails.orderId } });
      } else {
        navigate("/order-status");
      }
    } else if (modalAction === "goHome") {
      // Navigate to home page
      navigate("/");
    }
    setIsModalOpen(false);
    setModalAction(null);
  };

  const cancelAction = () => {
    setIsModalOpen(false);
    setModalAction(null);
  };

  return (
    <Container>
      <BackButton />
      <h1>Request Additional Services</h1>
      {!isVerified && (
        <InputContainer>
          <InputLabel htmlFor="orderId">Enter your Order ID</InputLabel>
          <InputField
            id="orderId"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            aria-label="Order ID"
            aria-describedby="orderId-error"
            aria-invalid={inputError ? "true" : "false"}
            hasError={inputError}
          />
          {/* Uncomment below if you want to allow table number verification */}
          {/*
          <p>OR</p>
          <InputLabel htmlFor="tableNumber">Enter your Table Number:</InputLabel>
          <InputField
            id="tableNumber"
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            aria-label="Table Number"
          />
          */}
          {inputError && (
            <ErrorMessage id="orderId-error">{inputError}</ErrorMessage>
          )}
          <CenteredButtonWrapper>
            <SubmitButton
              onClick={() => handleVerify()}
              disabled={isSubmitting}
              aria-label="Verify"
            >
              {isSubmitting ? "Verifying..." : "Verify"}
            </SubmitButton>
          </CenteredButtonWrapper>
        </InputContainer>
      )}
      {isVerified && (
        <InputContainer>
          <CheckboxContainer>
            {[
              "Water",
              "Napkins",
              "Condiments",
              "Cutlery",
              "Assistance",
              "Other",
            ].map((service, index) => (
              <Checkbox key={index}>
                <input
                  type="checkbox"
                  value={service}
                  onChange={() => handleServiceChange(service)}
                  checked={selectedServices.includes(service)}
                  aria-label={service}
                />
                <span>{service}</span>
              </Checkbox>
            ))}
          </CheckboxContainer>

          {selectedServices.includes("Other") && (
            <>
              <InputLabel htmlFor="otherRequest">Please specify:</InputLabel>
              <TextArea
                id="otherRequest"
                rows="3"
                value={otherRequest}
                onChange={(e) => setOtherRequest(e.target.value)}
                aria-label="Other Service Request"
                aria-describedby="otherRequest-error"
                aria-invalid={otherError ? "true" : "false"}
                hasError={otherError}
              />
              {otherError && (
                <ErrorMessage id="otherRequest-error">
                  {otherError}
                </ErrorMessage>
              )}
            </>
          )}

          <CenteredButtonWrapper>
            <SubmitButton
              onClick={handleSubmitRequest}
              disabled={isSubmitting}
              aria-label="Submit Request"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </SubmitButton>
          </CenteredButtonWrapper>
        </InputContainer>
      )}
      {isVerified && orderDetails && (
        <StatusContainer>
          <h3>Order Details:</h3>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>
                {item.quantity} x {item.name}
              </li>
            ))}
          </ul>
          <p>Total: ${orderDetails.total.toFixed(2)}</p>
        </StatusContainer>
      )}
      {isVerified && (
        <ButtonContainer>
          <ActionButton onClick={handleRequestAnotherService}>
            Request Services for Another Order
          </ActionButton>
          <ActionButton onClick={handleTrackOrder}>Track Order</ActionButton>
          <ActionButton onClick={handleGoHome}>Home</ActionButton>{" "}
          {/* Added Home Button */}
        </ButtonContainer>
      )}
      {isVerified && !orderDetails && (
        <ButtonContainer>
          <ActionButton onClick={handleRequestAnotherService}>
            Request Services for Another Order
          </ActionButton>
          <ActionButton onClick={handleTrackOrder}>Track Order</ActionButton>
          <ActionButton onClick={handleGoHome}>Home</ActionButton>{" "}
          {/* Added Home Button */}
        </ButtonContainer>
      )}

      {/* Confirmation Modal using ConfirmModal Component */}
      <ConfirmModal
        isModalOpen={isModalOpen}
        title={
          modalAction === "goHome" ? "Confirm Navigation" : "Confirm Action"
        }
        message={
          modalAction === "goHome"
            ? "Are you sure you want to return to the Home page?"
            : modalAction === "requestAnother"
            ? "Are you sure you want to request services for another order?"
            : "Are you sure you want to track this order?"
        }
        onConfirm={confirmAction}
        onCancel={cancelAction}
      />
    </Container>
  );
};

export default RequestServicesPage;
