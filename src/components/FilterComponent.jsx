// FilterComponent.js
import React, { useState } from "react";

const FilterComponent = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">
        {showFilter ? "Hide Filter" : "Show Filter"}
      </button>

      {showFilter && (
        <div className="absolute right-0 mt-2 p-4 bg-white border rounded-md">
          <input
            type="number"
            placeholder="Min Price"
            className="mb-2 px-3 py-2 border rounded-md mr-2"
          />
          <input
            type="number"
            placeholder="Max Price"
            className="mb-2 px-3 py-2 border rounded-md mr-2"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleFilter}>
            Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
