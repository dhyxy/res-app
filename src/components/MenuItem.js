// src/components/MenuItem.js

import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import fallbackImage from "../assets/fallback.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaLeaf,
  FaFire,
  FaWineBottle,
  FaUtensils,
  FaGlassCheers,
  FaCookie,
  FaHamburger,
  FaGlassMartiniAlt,
  FaCoffee,
  FaFilter,
} from "react-icons/fa";

const MenuItemCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 10px auto; /* Added vertical margin for spacing */

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 576px) {
    max-width: 100%; /* Full width on mobile */
    margin: 10px 0; /* Vertical spacing only */
  }

  .image-wrapper {
    width: 100%;
    height: 180px; /* Reduced height for mobile */
    background-color: #f9f9f9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }

  .details {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allows the details section to grow and fill space */
    text-align: left;

    @media (max-width: 576px) {
      padding: 10px; /* Reduced padding on mobile */
    }

    h3 {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;

      @media (max-width: 576px) {
        font-size: 1rem;
      }
    }

    .tags {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 6px;
      justify-items: center; /* Center tags within their grid cell */

      span {
        display: flex;
        align-items: center;
        gap: 3px;
        background-color: #eef2f3;
        color: #4a90e2;
        padding: 3px 7px;
        border-radius: 15px;
        font-size: 0.7rem;

        @media (max-width: 576px) {
          font-size: 0.6rem;
          padding: 2px 5px;
        }
      }
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 3px;
      margin-top: 8px;
      margin-bottom: 8px;

      .stars {
        display: flex;
        align-items: center;
        gap: 1px;
      }

      .num-reviews {
        font-size: 0.7rem;
        color: #666;
      }

      @media (max-width: 576px) {
        .num-reviews {
          font-size: 0.6rem;
        }
      }
    }

    .description {
      margin: 5px 0;
      font-size: 0.85rem;
      color: #666;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      @media (max-width: 576px) {
        font-size: 0.75rem;
      }

      .read-more {
        color: #4a90e2;
        cursor: pointer;
        text-decoration: underline;
        font-weight: bold;
        margin-left: 5px;
        flex-shrink: 0; /* Prevents the read-more from wrapping */

        &:hover {
          color: #357ab8;
        }

        &:focus {
          outline: 2px solid rgba(74, 144, 226, 0.5);
          outline-offset: 0px;
        }

        @media (max-width: 576px) {
          font-size: 0.7rem;
        }
      }
    }

    .price {
      font-weight: bold;
      font-size: 1.1rem;
      color: #4a90e2;
      margin-top: 8px;

      @media (max-width: 576px) {
        font-size: 1rem;
      }
    }
  }
`;

const AddToCartButton = styled.button`
  margin-top: auto; /* Pushes the button to the bottom of the card */
  padding: 10px 15px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
    outline-offset: 0px;
  }

  @media (max-width: 576px) {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
`;

// Styled Components for the Customization Modal
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
  background: ${({ theme }) => theme.modalBg || "#fff"};
  padding: 25px;
  border-radius: ${({ theme }) => theme.borderRadius || "10px"};
  width: 90%;
  max-width: 450px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
  position: relative;
  display: flex;
  flex-direction: column;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    margin-top: 0;
    color: #333;
    font-size: 1.4rem;

    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }

  .customization-options {
    margin: 15px 0;
    text-align: left;

    h4 {
      font-size: 1rem;
      margin-bottom: 10px;

      @media (max-width: 576px) {
        font-size: 0.9rem;
      }
    }

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;

      input {
        transform: scale(1.1); /* Larger checkboxes/radio buttons for touch */
      }

      @media (max-width: 576px) {
        flex-direction: column;
        align-items: flex-start;

        input {
          margin-right: 0;
        }
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;

    @media (max-width: 576px) {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor || "#333"};

  &:hover {
    color: ${({ theme }) => theme.accentColor || "#4a90e2"};
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
    outline-offset: 0px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    top: 10px;
    right: 10px;
  }
`;

const ConfirmButton = styled.button`
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
    outline-offset: 0px;
  }

  @media (max-width: 576px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    width: 100%; /* Make buttons full-width on small screens */
  }
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: #333333;
  border: none;
  border-radius: 5px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #aaa;
  }

  &:focus {
    outline: 2px solid rgba(204, 204, 204, 0.7);
    outline-offset: 0px;
  }

  @media (max-width: 576px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    width: 100%; /* Make buttons full-width on small screens */
  }
`;

// Mapping tags to icons
const tagIconMapping = {
  Vegan: <FaLeaf />,
  Vegetarian: <FaLeaf />,
  Spicy: <FaFire />,
  "Gluten-Free": <FaLeaf />, // aligned with the previous mapping
  Alcoholic: <FaWineBottle />,
  "Non-Alcoholic": <FaGlassCheers />, // aligned with the previous mapping
  Sweet: <FaCookie />, // aligned with the previous mapping
  Breakfast: <FaCoffee />, // aligned with the previous mapping
  Lunch: <FaHamburger />, // aligned with the previous mapping
  Dinner: <FaUtensils />,
  Appetizer: <FaGlassMartiniAlt />, // aligned with the previous mapping
  Miscellaneous: <FaFilter />,
};

const MenuItem = React.memo(
  ({
    id,
    image,
    name,
    tags,
    price,
    description,
    customizations,
    rating,
    numReviews,
  }) => {
    const [imgSrc, setImgSrc] = useState(image);
    const { addItem } = useContext(CartContext);
    const [isAdding, setIsAdding] = useState(false);
    const navigate = useNavigate();

    // Customization State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});

    // Description Truncation State
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const handleError = () => {
      setImgSrc(fallbackImage);
    };

    const handleAddToCartClick = () => {
      if (customizations && customizations.length > 0) {
        // Open customization modal
        setIsModalOpen(true);
      } else {
        // No customizations, add directly
        handleAddItem({});
      }
    };

    const handleAddItem = (customizationsSelected) => {
      setIsAdding(true);
      addItem({
        id,
        name,
        price,
        customizations: customizationsSelected,
      });

      toast.success(`${name} has been added to your cart!`, {
        position: "bottom-right",
        autoClose: 1500,
        closeButton: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: false,
        icon: "🛒",
      });

      setIsAdding(false);
    };

    const handleCustomizationChange = (category, option) => {
      setSelectedOptions((prev) => {
        const currentOptions = Array.isArray(prev[category])
          ? prev[category]
          : [];
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
      });
    };

    const handleConfirmCustomization = () => {
      handleAddItem(selectedOptions);
      setIsModalOpen(false);
      setSelectedOptions({});
    };

    const handleCancelCustomization = () => {
      setIsModalOpen(false);
      setSelectedOptions({});
    };

    // Function to render star ratings
    const renderStars = (rating) => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating - fullStars >= 0.5;

      for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`star-full-${i}`} color="#FFD700" />);
      }

      if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="star-half" color="#FFD700" />);
      }

      while (stars.length < 5) {
        stars.push(
          <FaRegStar key={`star-empty-${stars.length}`} color="#FFD700" />
        );
      }

      return stars;
    };

    // Function to toggle description expansion
    const toggleDescription = () => {
      setIsDescriptionExpanded((prev) => !prev);
    };

    // Function to get truncated description
    const getTruncatedDescription = (text, wordLimit) => {
      const words = text.split(" ");
      if (words.length <= wordLimit) return text;
      return words.slice(0, wordLimit).join(" ") + "...";
    };

    return (
      <>
        <MenuItemCard>
          <div className="image-wrapper">
            <img src={imgSrc} alt={name} loading="lazy" onError={handleError} />
          </div>
          <div className="details">
            <h3>
              {name}{" "}
              {(tags.includes("Vegan") || tags.includes("Vegetarian")) && (
                <FaLeaf title="Vegetarian/Vegan" />
              )}
            </h3>
            <div className="tags">
              {tags.map((tag, index) => (
                <span key={index}>
                  {tagIconMapping[tag] || <FaUtensils />} {tag}
                </span>
              ))}
            </div>
            <div className="rating">
              <div className="stars">{renderStars(rating)}</div>
              <div className="num-reviews">({numReviews} reviews)</div>
            </div>
            <p className="description">
              {isDescriptionExpanded
                ? description
                : getTruncatedDescription(description, 6)}
              {description.split(" ").length > 6 && (
                <span
                  className="read-more"
                  onClick={toggleDescription}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleDescription();
                  }}
                  aria-expanded={isDescriptionExpanded}
                >
                  {isDescriptionExpanded ? " Read Less" : " Read More"}
                </span>
              )}
            </p>
            <p className="price">${price.toFixed(2)}</p>
          </div>
          <AddToCartButton
            onClick={handleAddToCartClick}
            aria-label={`Add ${name} to Order`}
            disabled={isAdding}
          >
            {isAdding ? "Adding..." : "Add to Order"}
          </AddToCartButton>
        </MenuItemCard>

        {/* Customization Modal */}
        {isModalOpen && (
          <ModalOverlay
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                handleCancelCustomization();
              }
            }}
            role="dialog"
            aria-modal="true"
          >
            <ModalContent>
              <CloseButton
                onClick={handleCancelCustomization}
                aria-label="Close Customization Modal"
              >
                &times;
              </CloseButton>
              <h2>Customize Your {name}</h2>
              {customizations &&
              Array.isArray(customizations) &&
              customizations.length > 0 ? (
                customizations.map((customization, index) => (
                  <div key={index} className="customization-options">
                    <h4>{customization.name}</h4>
                    {Array.isArray(customization.options) ? (
                      customization.options.map((option, idx) => (
                        <label key={idx}>
                          <input
                            type={
                              customization.removable ? "checkbox" : "radio"
                            }
                            name={customization.name}
                            value={option}
                            checked={
                              customization.removable
                                ? Array.isArray(
                                    selectedOptions[customization.name]
                                  ) &&
                                  selectedOptions[customization.name].includes(
                                    option
                                  )
                                : selectedOptions[customization.name] === option
                            }
                            onChange={() =>
                              customization.removable
                                ? handleCustomizationChange(
                                    customization.name,
                                    option
                                  )
                                : setSelectedOptions((prev) => ({
                                    ...prev,
                                    [customization.name]: option,
                                  }))
                            }
                            aria-label={
                              customization.removable
                                ? `Toggle ${option}`
                                : `Select ${option}`
                            }
                          />
                          {customization.removable
                            ? ` Remove ${option}`
                            : ` Add ${option}`}
                        </label>
                      ))
                    ) : (
                      <span>No options available</span>
                    )}
                  </div>
                ))
              ) : (
                <p>No customization options available for this item.</p>
              )}
              <div className="buttons">
                <CancelButton onClick={handleCancelCustomization}>
                  Cancel
                </CancelButton>
                <ConfirmButton
                  onClick={handleConfirmCustomization}
                  disabled={isAdding}
                >
                  {isAdding ? "Adding..." : "Confirm"}
                </ConfirmButton>
              </div>
            </ModalContent>
          </ModalOverlay>
        )}
      </>
    );
  }
);

export default MenuItem;
