// src/pages/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import coolBackground from "../assets/coolbackground.svg";

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

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: url(${coolBackground}) no-repeat center center;
  background-size: cover;
  color: #f5f5f5;
  animation: ${fadeIn} 1.5s ease;
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    margin-bottom: 30px;
    max-width: 500px;
  }

  .button-container {
    display: flex;
    gap: 15px;

    button {
      padding: 1.5% 4%;
      font-size: clamp(0.9rem, 2vw, 1rem);
      background-color: #4a90e2;
      border: none;
      border-radius: 8px;
      color: #f5f5f5;
      cursor: pointer;
      transition: transform 0.3s ease, background-color 0.3s ease,
        box-shadow 0.3s ease;
      width: auto;
      min-width: 150px;
      max-width: 250px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: #333;
        color: #f5f5f5;
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      }

      &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }

    .button-container {
      flex-direction: column;
      gap: 10px;

      button {
        padding: 4% 6%;
        font-size: 0.9rem;
        min-width: 100px;
        max-width: 200px;
      }
    }
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartOrder = () => navigate("/menu");
  const handleLearnMore = () => navigate("/about");

  return (
    <HomeContainer>
      {/* Optional: Uncomment the following line to include BackButton on HomePage */}
      {/* <BackButton /> */}
      <h1>Welcome to Skip The Server!</h1>
      <p>
        Savor chef-crafted dishes made with the freshest ingredients. Enjoy a
        seamless online ordering experience.
      </p>
      <div className="button-container">
        <button onClick={handleStartOrder} aria-label="Start Order">
          Start Order
        </button>
        <button onClick={handleLearnMore} aria-label="Learn More">
          Learn More
        </button>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
