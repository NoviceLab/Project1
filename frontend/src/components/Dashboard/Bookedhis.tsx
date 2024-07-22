// src/components/BookedSpaceCard.tsx
import React from "react";

interface BookedSpaceCardProps {
  imageUrl: string;
  title: string;
  price: number;
}

const BookedSpaceCard: React.FC<BookedSpaceCardProps> = ({
  imageUrl,
  title,
  price,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BookedSpaceCard;
