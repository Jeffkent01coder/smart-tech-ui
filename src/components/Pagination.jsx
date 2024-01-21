import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationBar = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 ${
            i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
          } rounded focus:outline-none`}
          onClick={() => onPageChange(i)}>
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-8 mb-4">
      {/* Added margin-bottom */}
      {/* Add specific page numbers manually */}
      <button
        className={`px-4 py-2 mx-1 ${
          currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
        } rounded focus:outline-none`}
        onClick={() => onPageChange(1)}>
        1
      </button>
      <button
        className={`px-4 py-2 mx-1 ${
          currentPage === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
        } rounded focus:outline-none`}
        onClick={() => onPageChange(2)}>
        2
      </button>
      {/* Add more page numbers as needed */}
      {renderPaginationBar()}
    </div>
  );
};

export default Pagination;
