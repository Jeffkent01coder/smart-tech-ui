import React from "react";
import Dropdown from "./Dropdown";
import FilterComponent from "./FilterComponent";

const ParentComponent = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex items-center">
        <Dropdown />
      </div>

      <div>
        <FilterComponent />
      </div>
    </div>
  );
};

export default ParentComponent;
