import React from 'react';

interface LocationCardProps {
  image: string;
  title: string;
  address: string;
  description: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  title,
  address,
  description,
}) => {
  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-8">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{address}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LocationCard;