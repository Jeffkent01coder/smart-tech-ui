// Dropdown.js
import React, { useState, useRef, useEffect } from "react";

const Dropdown = () => {
  const categories = ["All", "Category1", "Category2", "Category3", "Category4", "Category5", "Category6", "Category7"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
    // You can add additional logic for category change here
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Check window width and adjust positioning
  useEffect(() => {
    if (dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (dropdownRect.right > windowWidth) {
        setShowDropdown(false);
      }
    }
  }, [showDropdown]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2"
      >
        {selectedCategory} <span className="ml-2">&#9660;</span>
      </button>

      {showDropdown && (
        <div className="absolute left-0 mt-2 p-4 bg-white border rounded-md">
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer py-2 ${selectedCategory === category ? 'bg-gray-200' : ''}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
