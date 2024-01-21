import React from "react";

const ProductView = () => {
  const product = {
    name: "Product Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    mainImage:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    otherImages: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Image */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
        </div>

        {/* Other Available Images */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div className="grid grid-cols-3 gap-4">
            {product.otherImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - Image ${index + 1}`}
                className="w-full h-auto rounded-md shadow-md mb-2"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div>
            <h2 className="text-lg font-semibold mb-2">Features:</h2>
            <ul className="list-disc pl-4">
              {product.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
