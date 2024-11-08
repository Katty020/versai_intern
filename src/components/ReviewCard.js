import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="absolute top-2 left-2 stars text-yellow-500">
      {[...Array(5)].map((_, index) => (
        <i 
          key={index} 
          className={`fas fa-star ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        ></i>
      ))}
    </div>
  );
};

const ReviewCard = ({ name, role, quote, avatar, rating }) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md relative h-full flex flex-col">
      <StarRating rating={rating} />
      <div className="flex-grow">
        <br />
        <blockquote className="italic text-gray-700">{quote}</blockquote>
      </div>
      <div className="flex items-center mt-4">
        <img 
          src={avatar} 
          alt={name} 
          className="rounded-full mr-4 w-12 h-12 object-cover"
        />
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;