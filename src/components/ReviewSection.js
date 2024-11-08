import React from "react";
import { reviews } from "../data/reviewsData";

const StarRating = ({ rating }) => {
  return (
    <div className="absolute top-[20px] left-2 ml-2 mt-2 text-[#293339] mb-4">
      {" "}
      {/* Increased bottom margin */}
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fas fa-star ${
            index < rating ? "text-[#293339]" : "text-gray-300"
          }`}
        ></i>
      ))}
    </div>
  );
};

const ReviewCard = ({ name, role, quote, avatar, rating }) => {
  return (
    <div className="bg-[#f6f7f7] text-gray-800 p-6 rounded-lg border-b-gray-100 relative min-h-[260px] max-w-2xl mx-auto">
      {/* Added 5 stars at the top of the card */}
      <div className="absolute top-[20px] left-2 ml-2 mt-2 text-[#293339] mb-4">
        {" "}
        {/* Increased bottom margin */}
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fas fa-star ${
              index < 5 ? "text-[#293339]" : "text-gray-300"
            }`}
          ></i>
        ))}
      </div>

      {/* Dynamic star rating */}
      <StarRating rating={rating} />

      <div className="flex-grow mt-6">
        {" "}
        {/* Added margin-top to move content down */}
        <br />
        <blockquote className="italic text-gray-700 leading-relaxed">
          {quote}
        </blockquote>
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

const ReviewSection = () => {
  return (
    <div className="bottom-section bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Updated to grid-cols-2 for 2 cards per row */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              role={review.role}
              quote={review.quote}
              avatar={review.avatar}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
