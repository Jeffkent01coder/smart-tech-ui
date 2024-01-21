import React, { useState, useEffect, useRef } from "react";

const ProductDetail = ({ images, name, description, features, price }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomOut, setZoomOut] = useState(false);
  const maxImageHeight = 400; // Adjust the max height as needed
  const intervalRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = images[currentImageIndex];

    img.onload = () => {
      const aspectRatio = img.width / img.height;
      // Check if the aspect ratio suggests zooming out
      setZoomOut(aspectRatio > 1.5);
    };

    // Set up automatic image swiping every 5 seconds
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalRef.current);
    };
  }, [currentImageIndex, images]);

  const nextImage = () => {
    // Clear the automatic swiping interval when user interacts
    clearInterval(intervalRef.current);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    // Clear the automatic swiping interval when user interacts
    clearInterval(intervalRef.current);
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side - Main Image and Navigation Buttons */}
      <div
        className={`lg:w-1/2 lg:h-96 relative overflow-hidden ${
          zoomOut && "zoom-out"
        }`}>
        <img
          src={images[currentImageIndex]}
          alt={name}
          className={`w-full h-full object-cover scale-95 max-h-${maxImageHeight}`}
        />
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={prevImage}
            className="bg-blue-400 px-4 py-2 rounded-full text-white focus:outline-none">
            {"<"}
          </button>
          <button
            onClick={nextImage}
            className="bg-blue-400 px-4 py-2 rounded-full text-white focus:outline-none">
            {">"}
          </button>
        </div>
      </div>

      {/* Right Side - Product Information */}
      <div className="lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2 text-pink-500">{name}</h2>
        <h3 className="text-xl font-bold mb-2 text-pink-500">Description:</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <h3 className="text-xl font-bold mb-2 text-pink-500">Features:</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="text-gray-700 mb-2 font-bold">{`Price: $${price}`}</p>
        <button className="bg-pink-500 text-white w-full px-6 py-2 rounded-full">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
