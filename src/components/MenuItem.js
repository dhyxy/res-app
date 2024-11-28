// src/components/MenuItem.js

import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import fallbackImage from "../assets/fallback.png";
import { toast } from "react-toastify";
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MenuItemCard = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  .image-wrapper {
    width: 100%;
    height: 180px; /* Fixed height to ensure all images are the same size */
    background-color: #f9f9f9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px; /* Rounded corners for the wrapper */

    .food-image {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensures uniform size by cropping excess content */
      border-radius: 8px; /* Ensures the image follows the wrapper's rounded corners */
    }
  }

  .details {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: left;

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 8px;

      span {
        display: flex;
        align-items: center;
        gap: 3px;
        background-color: #eef2f3;
        color: #4a90e2;
        padding: 3px 7px;
        border-radius: 15px;
        font-size: 0.7rem;
      }
    }

    h3 {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 3px;
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
    }

    .description {
      margin: 5px 0;
      font-size: 0.85rem;
      color: #666;
      /* Removed line-clamp styles to allow dynamic height */
    }

    .read-more-button {
      background: none;
      border: none;
      color: #4a90e2;
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0;
      margin-top: 5px;
      text-decoration: underline;

      &:hover {
        color: #357ab8;
      }

      &:focus {
        outline: none;
        text-decoration: none;
      }
    }

    .price {
      font-weight: bold;
      font-size: 1.1rem;
      color: #4a90e2;
      margin-top: 8px;
    }
  }
`;

const AddToCartButton = styled.button`
  margin-top: auto;
  padding: 8px 12px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.85rem;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4e3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
  }
`;

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
  padding: 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 450px;
  position: relative;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 0;
    color: #333;
    font-size: 1.4rem;
  }

  .customization-options {
    margin: 15px 0;
    text-align: left;

    h4 {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;

      input {
        transform: scale(1.1);
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
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
  color: #333;

  &:hover {
    color: #4a90e2;
  }

  &:focus {
    outline: 2px solid rgba(74, 144, 226, 0.5);
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
  }
`;

const tagIconMapping = {
  Vegan: <FaLeaf />,
  Vegetarian: <FaLeaf />,
  "Gluten-Free": <FaLeaf />,
  Spicy: <FaFire />,
  Alcoholic: <FaWineBottle />,
  "Non-Alcoholic": <FaGlassCheers />,
  Sweet: <FaCookie />,
  Breakfast: <FaCoffee />,
  Lunch: <FaHamburger />,
  Dinner: <FaUtensils />,
  Appetizer: <FaGlassMartiniAlt />,
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

    // Customization State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});

    // Description Expansion State
    const [isExpanded, setIsExpanded] = useState(false);

    const handleError = () => {
      setImgSrc(fallbackImage);
    };

    const handleAddToCartClick = () => {
      if (customizations && customizations.length > 0) {
        setIsModalOpen(true);
      } else {
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
          return {
            ...prev,
            [category]: currentOptions.filter((opt) => opt !== option),
          };
        } else {
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

    const toggleExpanded = () => {
      setIsExpanded((prev) => !prev);
    };

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

    // Function to truncate description to first 7 words
    const truncateDescription = (text, wordLimit) => {
      const words = text.split(" ");
      if (words.length <= wordLimit) {
        return text;
      }
      const truncated = words.slice(0, wordLimit).join(" ");
      return truncated;
    };

    const wordLimit = 7;
    const isLongDescription = description.split(" ").length > wordLimit;
    const displayedDescription = isExpanded
      ? description
      : truncateDescription(description, wordLimit);

    return (
      <>
        <MenuItemCard>
          <div className="image-wrapper">
            <LazyLoadImage
              src={imgSrc}
              alt={name}
              onError={handleError}
              effect="blur"
              className="food-image"
            />
          </div>
          <div className="details">
            <div className="tags">
              {tags.map((tag, index) => (
                <span key={index}>
                  {tagIconMapping[tag] || <FaUtensils />} {tag}
                </span>
              ))}
            </div>
            <h3>
              {name}{" "}
              {(tags.includes("Vegan") || tags.includes("Vegetarian")) && (
                <FaLeaf title="Vegetarian/Vegan" />
              )}
            </h3>
            <div className="rating">
              <div className="stars">{renderStars(rating)}</div>
              <div className="num-reviews">({numReviews} reviews)</div>
            </div>
            <p className="description">
              {displayedDescription}
              {isLongDescription && (
                <button
                  className="read-more-button"
                  onClick={toggleExpanded}
                  aria-label={
                    isExpanded
                      ? " ...Read less about " + name
                      : " ...Read more about " + name
                  }
                >
                  {isExpanded ? "Read Less" : "  ...Read More"}
                </button>
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
