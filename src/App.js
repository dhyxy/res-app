import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import RequestServicesPage from "./pages/RequestServicesPage";
import styled, { createGlobalStyle } from "styled-components";

import "@fontsource/open-sans"; // Import Open Sans font

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #fff;
    color: #333;
  }

  html {
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 70px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

function App() {
  return (
    <ErrorBoundary>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-status" element={<OrderStatusPage />} />
            <Route path="/request-services" element={<RequestServicesPage />} />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </ErrorBoundary>
  );
}

export default App;
