// src/pages/OrderStatusPage.js

import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import { toast } from "react-toastify";

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
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const TrackButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
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
  margin-top: 10px; /* Add some spacing above the status text */
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

  useEffect(() => {
    if (location.state?.orderId && !autoTrack) {
      setOrderIdInput(location.state.orderId);
      handleTrackOrder(location.state.orderId);
      setAutoTrack(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, autoTrack]);

  const handleTrackOrder = (id = orderIdInput) => {
    if (id.trim() === "") {
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

    const fetchedOrder = getOrderById(id.trim());
    if (fetchedOrder) {
      setOrder(fetchedOrder);
      setIsVerified(true); // Mark as verified
      setProgress(0);
      setStatusText("Order Received");
      simulateProgress();
    } else {
      setOrder(null);
      setIsVerified(false); // Remain unverified
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
  };

  const simulateProgress = () => {
    const statuses = [
      { percent: 0, text: "Order Received" },
      { percent: 25, text: "Preparing your order" },
      { percent: 50, text: "Cooking in progress" },
      { percent: 75, text: "Order is almost ready" },
      { percent: 100, text: "Your order will be served to you shortly!" },
    ];
    let index = 0;
    const interval = setInterval(() => {
      if (index < statuses.length) {
        setProgress(statuses[index].percent);
        setStatusText(statuses[index].text);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 2000);
    setIntervalId(interval);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleTrackAnotherOrder = () => {
    // Reset state to allow tracking another order
    setIsVerified(false);
    setOrder(null);
    setProgress(0);
    setStatusText("");
    setOrderIdInput("");
    setAutoTrack(false);
    // Clear any existing intervals
    if (intervalId) clearInterval(intervalId);
    toast.info("Tracking of another order has been initiated.", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: "ℹ️",
    });
  };

  const handleRequestServices = () => {
    if (isVerified && order) {
      navigate("/request-services", { state: { orderId: order.orderId } });
    } else {
      navigate("/request-services");
    }
  };

  return (
    <Container>
      <BackButton />
      <h1>Track Your Order</h1>
      {!isVerified && (
        <InputContainer>
          <InputLabel htmlFor="orderId">Enter your Order ID:</InputLabel>
          <InputField
            id="orderId"
            type="text"
            value={orderIdInput}
            onChange={(e) => setOrderIdInput(e.target.value)}
            aria-label="Order ID"
          />
          <TrackButton
            onClick={() => handleTrackOrder()}
            aria-label="Track Order"
          >
            Track Order
          </TrackButton>
        </InputContainer>
      )}
      {statusText && <StatusText>{statusText}</StatusText>}
      {isVerified && order && (
        <StatusContainer>
          <ProgressBarContainer>
            <ProgressBar progress={progress} />
          </ProgressBarContainer>
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
          </ButtonContainer>
        </StatusContainer>
      )}
      {isVerified && !order && (
        <ButtonContainer>
          <ActionButton onClick={handleTrackAnotherOrder}>
            Track Another Order
          </ActionButton>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default OrderStatusPage;
