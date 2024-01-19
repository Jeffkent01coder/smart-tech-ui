import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="w-24 h-32 bg-white rounded-lg overflow-hidden shadow-md mx-auto my-4">
      <img
        src={image}
        alt={title}
        className="w-full h-2/3 object-contain mb-2"
      />
      <div className="p-2 text-center">
        <h2 className="text-xs font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
