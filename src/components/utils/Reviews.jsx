import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke, FaRegStar } from 'react-icons/fa6';

const Reviews = ({ rating }) => {
  const clampedRating = Math.max(0, Math.min(rating, 5));
  
  const fullStars = Math.floor(clampedRating);
  const halfStar = clampedRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} title={`${rating} Star Rating`}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} color="#FFD700" />
      ))}
      {[...Array(halfStar)].map((_, index) => (
        <FaRegStarHalfStroke key={`half-${index}`} color="#FFD700" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} color="#ccc" />
      ))}
    </div>
  );
};

export default Reviews;
