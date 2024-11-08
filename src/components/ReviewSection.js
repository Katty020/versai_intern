import React from 'react';
import ReviewCard from './ReviewCard';
import { reviews } from '../data/reviewsData';

const ReviewSection = () => {
  return (
    <div className="bottom-section bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(review => (
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