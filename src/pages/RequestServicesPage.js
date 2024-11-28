// src/pages/RequestServicesPage.js

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

const SubmitButton = styled.button`
  margin-top: 15px;
  padding: 12px 20px;
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
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4a90e2;
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

  useEffect(() => {
    if (location.state?.orderId && !autoVerify) {
      setOrderId(location.state.orderId);
      handleVerify(location.state.orderId);
      setAutoVerify(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, autoVerify]);

  const handleVerify = (id = orderId) => {
    if (id.trim() !== "") {
      const order = getOrderById(id.trim());
      if (order) {
        setIsVerified(true);
        setOrderDetails(order);
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
        toast.error("Invalid Order ID. Please check and try again.", {
          position: "bottom-right",
          autoClose: 1500,
          closeButton: true,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: false,
          icon: "❌",
        });
      }
    } else if (tableNumber.trim() !== "") {
      if (/^\d+$/.test(tableNumber.trim())) {
        setIsVerified(true);
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
        setIsVerified(false);
        toast.error("Invalid Table Number. Please enter a valid number.", {
          position: "bottom-right",
          autoClose: 1500,
          closeButton: true,
          hideProgressBar: true,
          pauseOnHover: true,
          draggable: false,
          icon: "❌",
        });
      }
    } else {
      toast.warn("Please enter your Order ID or Table Number.", {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
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
    if (selectedServices.length === 0 && !otherRequest.trim()) {
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
    }, 2000);
  };

  const handleRequestAnotherService = () => {
    // Set the action to be canceled
    setIsVerified(false);
    setOrderId("");
    setTableNumber("");
    setSelectedServices([]);
    setOtherRequest("");
    setOrderDetails(null);
    setAutoVerify(false);
    toast.info("Request for another service has been initiated.", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      icon: "ℹ️",
    });
  };

  const handleTrackOrder = () => {
    if (isVerified && orderDetails) {
      navigate("/order-status", { state: { orderId: orderDetails.orderId } });
    } else {
      navigate("/order-status");
    }
  };

  return (
    <Container>
      <BackButton />
      <h1>Request Additional Services</h1>
      {!isVerified && (
        <InputContainer>
          <InputLabel htmlFor="orderId">Enter your Order ID:</InputLabel>
          <InputField
            id="orderId"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            aria-label="Order ID"
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
          <SubmitButton onClick={() => handleVerify()}>Verify</SubmitButton>
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
              />
            </>
          )}

          <SubmitButton onClick={handleSubmitRequest} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </SubmitButton>
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
        </ButtonContainer>
      )}
    </Container>
  );
};

export default RequestServicesPage;
