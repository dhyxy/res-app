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
  FaPrayingHands,
  FaSeedling,
  FaNutritionix,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReviewSection from "./ReviewSection";

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
    height: 180px;
    background-color: #f9f9f9;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .food-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
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

    .buttons-container {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      /* Ensure buttons have consistent sizes */
      button {
        flex: 1; /* Each button takes equal space */
        max-width: 150px; /* Optional: Limit maximum width to prevent excessive stretching */
      }

      /* Responsive styles */
      @media (max-width: 768px) {
        gap: 8px; /* Adjust gap between buttons */
      }

      @media (max-width: 480px) {
        flex-direction: row; /* Keep buttons side by side */
        gap: 6px; /* Further reduce gap */
        justify-content: center; /* Center-align buttons */
        button {
          flex: 1; /* Buttons remain evenly sized */
        }
      }
    }
  }
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.85rem;
  flex: 1;
  text-align: center;

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

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 0.8rem; /* Slightly smaller font */
    padding: 6px 10px; /* Reduce padding */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* Even smaller font for narrow screens */
    padding: 10px 8px; /* Further reduce padding */
  }
`;

const ReviewsButton = styled.button`
  padding: 8px 12px;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.85rem;
  flex: 1;
  text-align: center;

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

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 0.8rem; /* Slightly smaller font */
    padding: 6px 10px; /* Reduce padding */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* Even smaller font for narrow screens */
    padding: 17px 8px; /* Further reduce padding */
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
  max-width: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;

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
  Vegetarian: <FaSeedling />,
  "Gluten-Free": <FaLeaf />,
  Spicy: <FaFire />,
  Alcoholic: <FaWineBottle />,
  "Non-Alcoholic": <FaGlassCheers />,
  Sweet: <FaCookie />,
  Breakfast: <FaCoffee />,
  Lunch: <FaHamburger />,
  Dinner: <FaUtensils />,
  Appetizer: <FaGlassMartiniAlt />,
  Kosher: <FaPrayingHands />,
  Halal: <FaPrayingHands />,
  "Contains Nuts": <FaNutritionix />,
  Miscellaneous: <FaFilter />,
};

const MenuItem = ({
  id,
  image,
  name,
  tags,
  price,
  description,
  customizations,
  rating,
  numReviews,
  reviews,
}) => {
  const [imgSrc, setImgSrc] = useState(image || fallbackImage);
  const { addItem } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);

  // Customization State
  const [isCustomizationModalOpen, setIsCustomizationModalOpen] =
    useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  // Review Modal State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  // State for managing reviews
  const [itemReviews, setItemReviews] = useState(reviews || []);

  // Description Expansion State
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddReview = (newReview) => {
    setItemReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  const handleError = () => {
    setImgSrc(fallbackImage);
    toast.warn(`Image failed to load for ${name}.`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleAddToCartClick = () => {
    if (
      customizations &&
      Array.isArray(customizations) &&
      customizations.length > 0
    ) {
      setIsCustomizationModalOpen(true);
    } else {
      handleAddItem({});
    }
  };

  const handleAddItem = (customizationsSelected) => {
    try {
      setIsAdding(true);
      if (!id || !name || typeof price !== "number") {
        throw new Error("Missing essential item data.");
      }
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
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error(`Failed to add ${name || "item"} to cart.`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    } finally {
      setIsAdding(false);
    }
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
    setIsCustomizationModalOpen(false);
    setSelectedOptions({});
  };

  const handleCancelCustomization = () => {
    setIsCustomizationModalOpen(false);
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

  // Function to truncate description to first 15 words
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    const truncated = words.slice(0, wordLimit).join(" ");
    return truncated;
  };

  const wordLimit = 5;
  const isLongDescription =
    description && description.split(" ").length > wordLimit;
  const displayedDescription = isExpanded
    ? description
    : truncateDescription(description, wordLimit);

  return (
    <>
      <MenuItemCard>
        <div className="image-wrapper">
          <LazyLoadImage
            src={imgSrc}
            alt={name || "Menu Item"}
            onError={handleError}
            effect="blur"
            className="food-image"
          />
        </div>
        <div className="details">
          <div className="tags">
            {tags && Array.isArray(tags) && tags.length > 0 ? (
              tags.map((tag, index) => (
                <span key={index}>
                  {tagIconMapping[tag] || <FaUtensils />} {tag}
                </span>
              ))
            ) : (
              <span>No Tags</span>
            )}
          </div>
          <h3>
            {name || "Unnamed Item"}{" "}
            {tags &&
              (tags.includes("Vegan") || tags.includes("Vegetarian")) && (
                <FaLeaf title="Vegetarian/Vegan" />
              )}
          </h3>
          <div className="rating">
            <div className="stars">
              {rating ? renderStars(rating) : <FaRegStar color="#FFD700" />}
            </div>
            <div className="num-reviews">
              {numReviews ? `(${numReviews} reviews)` : "(No reviews)"}
            </div>
          </div>
          <p className="description">
            {displayedDescription}
            {isLongDescription && (
              <button
                className="read-more-button"
                onClick={toggleExpanded}
                aria-label={
                  isExpanded
                    ? `Read less about ${name || "item"}`
                    : `Read more about ${name || "item"}`
                }
              >
                {isExpanded ? " Read Less" : " ...Read More"}
              </button>
            )}
          </p>
          <p className="price">
            {typeof price === "number"
              ? `$${price.toFixed(2)}`
              : "Price Unavailable"}
          </p>
          <div className="buttons-container">
            <ReviewsButton
              onClick={() => setIsReviewModalOpen(true)}
              aria-label={`View reviews for ${name}`}
            >
              Reviews
            </ReviewsButton>
            <Button
              onClick={handleAddToCartClick}
              aria-label={`Add ${name || "item"} to Order`}
              disabled={isAdding}
            >
              {isAdding ? "Adding..." : "Add to Order"}
            </Button>
          </div>
        </div>
      </MenuItemCard>

      {/* Customization Modal */}
      {isCustomizationModalOpen && (
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
            <h2>Customize Your {name || "Item"}</h2>
            {customizations &&
            Array.isArray(customizations) &&
            customizations.length > 0 ? (
              customizations.map((customization, index) => (
                <div key={index} className="customization-options">
                  <h4>{customization.name}</h4>
                  {customization.options &&
                  Array.isArray(customization.options) ? (
                    customization.options.map((option, idx) => (
                      <label key={idx}>
                        <input
                          type={customization.removable ? "checkbox" : "radio"}
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

      {/* Review Modal */}
      {isReviewModalOpen && (
        <ModalOverlay
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsReviewModalOpen(false);
            }
          }}
          role="dialog"
          aria-modal="true"
        >
          <ModalContent>
            <CloseButton
              onClick={() => setIsReviewModalOpen(false)}
              aria-label="Close Review Modal"
            >
              &times;
            </CloseButton>
            <h2>Reviews for {name}</h2>
            <ReviewSection
              reviews={itemReviews}
              onAddReview={handleAddReview}
              itemName={name}
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default MenuItem;
