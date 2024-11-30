// src/pages/OrderStatusPage.js

import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import { toast } from "react-toastify";
import ConfirmModal from "../components/ConfirmModal";
import { FaClock } from "react-icons/fa";

// Styled Components

const Container = styled.div`
  padding: 40px 20px;
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
  max-width: 400px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333;
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

const CenteredButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const TrackButton = styled.button`
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

const StatusContainer = styled.div`
  margin-top: 30px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProgressBarContainer = styled.div`
  position: relative;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #4a90e2;
  border-radius: 10px;
  transition: width 0.5s ease;
`;

const StatusText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ isError }) => (isError ? "#ff4d4d" : "#333")};
`;

const EstimatedTimeText = styled.p`
  font-size: 1rem;
  margin-top: 5px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 5px;
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
  justify-content: center;
  gap: 20px;
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

const OrderStatusPage = () => {
  const { getOrderById } = useContext(OrderContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [orderIdInput, setOrderIdInput] = useState("");
  const [order, setOrder] = useState(null);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [autoTrack, setAutoTrack] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [inputError, setInputError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [estimatedTimeRemaining, setEstimatedTimeRemaining] = useState(null);
  const [totalEstimatedTime, setTotalEstimatedTime] = useState(null); // New state

  useEffect(() => {
    if (location.state?.orderId && !autoTrack) {
      setOrderIdInput(location.state.orderId);
      handleTrackOrder(location.state.orderId);
      setAutoTrack(true);
    } else if (!location.state?.orderId && autoTrack) {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      setOrderIdInput("");
      setOrder(null);
      setProgress(0);
      setStatusText("");
      setIsVerified(false);
      setInputError("");
      setAutoTrack(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, autoTrack]);

  const validateOrderId = (id) => {
    const regex = /^[a-zA-Z0-9]{5,15}$/;
    return regex.test(id);
  };

  const handleTrackOrder = (id = orderIdInput) => {
    const trimmedId = id.trim();
    if (trimmedId === "") {
      setInputError("Order ID cannot be empty.");
      toast.warn("Please enter your Order ID.", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "⚠️",
      });
      return;
    }

    if (!validateOrderId(trimmedId)) {
      setInputError(
        "Invalid Order ID format. It should be alphanumeric and 5-15 characters long."
      );
      toast.warn("Invalid Order ID format.", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "⚠️",
      });
      return;
    }

    setInputError("");
    if (intervalId) clearInterval(intervalId);

    try {
      const fetchedOrder = getOrderById(trimmedId);
      if (fetchedOrder) {
        setOrder(fetchedOrder);
        setIsVerified(true);
        setProgress(0);
        setStatusText("Order Received");
        calculateTotalEstimatedTime(fetchedOrder.items);
        toast.success("Order found. Tracking started!", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: false,
          icon: "✅",
        });
      } else {
        setOrder(null);
        setIsVerified(false);
        setStatusText("Order not found. Please check your Order ID.");
        toast.error("Order not found. Please check your Order ID.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: false,
          icon: "❌",
        });
      }
    } catch (error) {
      setOrder(null);
      setIsVerified(false);
      setStatusText("An unexpected error occurred. Please try again later.");
      toast.error("An unexpected error occurred. Please try again later.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "❌",
      });
      console.error("Error fetching order:", error);
    }
  };

  const calculateTotalEstimatedTime = (items) => {
    let totalTime = 0;
    items.forEach((item) => {
      // Remove the redundant line below
      // totalTime += item.estimatedTime * item.quantity;

      if (typeof item.estimatedTime === "number") {
        totalTime += item.estimatedTime * item.quantity;
      } else {
        totalTime += 20 * item.quantity; // Default estimated time per item
      }
    });
    setEstimatedTimeRemaining(totalTime);
    setTotalEstimatedTime(totalTime); // Save the total estimated time
    simulateProgress(totalTime); // Start the progress simulation with total time
  };

  const simulateProgress = (totalTime) => {
    const statuses = [
      { percent: 0, text: "Order Received" },
      { percent: 25, text: "Preparing your order" },
      { percent: 50, text: "Cooking in progress" },
      { percent: 75, text: "Order is almost ready" },
      { percent: 100, text: "Your order will be served shortly!" },
    ];

    const progressIntervals = [0, 25, 50, 75, 100]; // Progress percentages
    let currentIndex = 0;

    // Clear any existing interval to prevent multiple intervals running simultaneously
    if (intervalId) {
      clearInterval(intervalId);
    }

    const interval = setInterval(() => {
      if (currentIndex >= progressIntervals.length) {
        clearInterval(interval);
        setIntervalId(null);
        setEstimatedTimeRemaining(0);
        return;
      }

      const currentProgress = progressIntervals[currentIndex];
      setProgress(currentProgress);

      // Update status text based on progress
      const currentStatus = statuses.find(
        (status) => status.percent === currentProgress
      ).text;
      setStatusText(currentStatus);

      // Update estimated time remaining
      const newRemaining = Math.ceil(
        totalTime * ((100 - currentProgress) / 100)
      );
      setEstimatedTimeRemaining(newRemaining);

      currentIndex++;
    }, 1000); // Update every second

    setIntervalId(interval);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleTrackAnotherOrder = () => {
    setModalAction("trackAnother");
    setIsModalOpen(true);
  };

  const handleRequestServices = () => {
    setModalAction("requestServices");
    setIsModalOpen(true);
  };

  const handleGoHome = () => {
    setModalAction("goHome");
    setIsModalOpen(true);
  };

  const confirmAction = () => {
    if (modalAction === "trackAnother") {
      toast.info("Tracking another order.", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "ℹ️",
      });
      navigate("/order-status");
    } else if (modalAction === "requestServices") {
      if (isVerified && order) {
        navigate("/request-services", { state: { orderId: order.orderId } });
      } else {
        navigate("/request-services");
      }
    } else if (modalAction === "goHome") {
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
      <h1>Track Your Order</h1>
      {!isVerified && (
        <InputContainer>
          <InputLabel htmlFor="orderId">Enter your Order ID</InputLabel>
          <InputField
            id="orderId"
            type="text"
            value={orderIdInput}
            onChange={(e) => setOrderIdInput(e.target.value)}
            aria-label="Order ID"
            aria-describedby="orderId-error"
            aria-invalid={inputError ? "true" : "false"}
            hasError={inputError}
          />
          {inputError && (
            <ErrorMessage id="orderId-error">{inputError}</ErrorMessage>
          )}
          <CenteredButtonWrapper>
            <TrackButton
              onClick={() => handleTrackOrder()}
              aria-label="Track Order"
              disabled={!!intervalId}
            >
              {intervalId ? "Tracking..." : "Track Order"}
            </TrackButton>
          </CenteredButtonWrapper>
        </InputContainer>
      )}
      {statusText && (
        <StatusText isError={!isVerified && !order}>{statusText}</StatusText>
      )}
      {isVerified && order && (
        <StatusContainer>
          <ProgressBarContainer>
            <ProgressBar progress={progress} />
          </ProgressBarContainer>
          {estimatedTimeRemaining !== null && (
            <EstimatedTimeText>
              <FaClock /> Estimated Time Remaining: {estimatedTimeRemaining} min
            </EstimatedTimeText>
          )}
          <OrderDetails>
            <h3>Order Details:</h3>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.quantity} x {item.name}
                </li>
              ))}
            </ul>
            <p>Total: ${order.total.toFixed(2)}</p>
          </OrderDetails>
          <ButtonContainer>
            <ActionButton onClick={handleTrackAnotherOrder}>
              Track Another Order
            </ActionButton>
            <ActionButton onClick={handleRequestServices}>
              Request Services
            </ActionButton>
            <ActionButton onClick={handleGoHome}>Home</ActionButton>
          </ButtonContainer>
        </StatusContainer>
      )}
      {isVerified && !order && (
        <ButtonContainer>
          <ActionButton onClick={handleTrackAnotherOrder}>
            Track Another Order
          </ActionButton>
          <ActionButton onClick={handleGoHome}>Home</ActionButton>
        </ButtonContainer>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isModalOpen={isModalOpen}
        title={
          modalAction === "goHome" ? "Confirm Navigation" : "Confirm Action"
        }
        message={
          modalAction === "goHome"
            ? "Are you sure you want to return to the Home page?"
            : modalAction === "trackAnother"
            ? "Are you sure you want to track another order?"
            : "Are you sure you want to request additional services?"
        }
        onConfirm={confirmAction}
        onCancel={cancelAction}
      />
    </Container>
  );
};

export default OrderStatusPage;
