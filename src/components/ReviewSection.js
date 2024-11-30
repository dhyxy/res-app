import React, { useState } from "react";
import styled from "styled-components";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaUserCircle,
  FaPaperPlane,
  FaStar as FaStarFilled,
} from "react-icons/fa";

const ReviewSectionContainer = styled.div`
  margin-top: 20px;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #333;
  }
`;

const ReviewList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

const ReviewItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  .icon {
    font-size: 2rem;
    color: #4a90e2;
  }

  .content {
    flex: 1;

    .username {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 1rem;
      color: #333;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 2px;
      margin-bottom: 5px;
    }

    .comment {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 5px;
    }

    .date {
      font-size: 0.8rem;
      color: #888;
    }
  }
`;

const AddReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #ddd;
  padding-top: 20px;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #4a90e2;
    }
  }

  textarea {
    width: 100%;
    min-height: 80px;
    resize: vertical;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #4a90e2;
    }
  }

  .rating-select {
    display: flex;
    align-items: center;
    gap: 10px;

    label {
      font-size: 1rem;
    }

    .stars {
      display: flex;
      gap: 5px;

      .star {
        font-size: 1.5rem;
        color: #ccc;
        cursor: pointer;

        &.selected {
          color: #ffd700;
        }

        &:hover,
        &:hover ~ .star {
          color: #ffd700;
        }
      }
    }
  }

  button {
    align-self: flex-end;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;

    &:hover {
      background-color: #357ab8;
    }

    &:disabled {
      background-color: #a0c4e3;
      cursor: not-allowed;
    }
  }
`;

const ReviewSection = ({ reviews, onAddReview, itemName }) => {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    setIsSubmitting(true);

    const newReview = {
      username: userName.trim() === "" ? "Anonymous" : userName.trim(),
      rating: parseFloat(rating),
      comment: comment.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    // Simulate API call delay
    setTimeout(() => {
      onAddReview(newReview);
      setComment("");
      setUserName("");
      setRating(5);
      setIsSubmitting(false);
    }, 500);
  };

  const renderStars = (ratingValue) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStarFilled
          key={i}
          className={`star ${i <= ratingValue ? "selected" : ""}`}
          onClick={() => setRating(i)}
          color={i <= ratingValue ? "#FFD700" : "#ccc"}
        />
      );
    }

    return stars;
  };

  return (
    <ReviewSectionContainer>
      <h4>Customer Reviews</h4>
      <ReviewList>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewItem key={index}>
              <div className="icon">
                <FaUserCircle />
              </div>
              <div className="content">
                <div className="username">{review.username}</div>
                <div className="rating">{renderStars(review.rating)}</div>
                <div className="comment">{review.comment}</div>
                <div className="date">{review.date}</div>
              </div>
            </ReviewItem>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </ReviewList>
      <AddReviewForm onSubmit={handleSubmitReview}>
        <h4>Leave a Review</h4>
        <input
          type="text"
          placeholder="Your Name (Leave blank for anonymous review)"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          maxLength={50}
        />
        <textarea
          placeholder={`Write your review for ${itemName}`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={500}
          required
        />
        <div className="rating-select">
          <label>Your Rating:</label>
          <div className="stars">{renderStars(rating)}</div>
        </div>
        <button type="submit" disabled={isSubmitting || comment.trim() === ""}>
          {isSubmitting ? "Submitting..." : "Submit Review"}
          <FaPaperPlane />
        </button>
      </AddReviewForm>
    </ReviewSectionContainer>
  );
};

export default ReviewSection;
