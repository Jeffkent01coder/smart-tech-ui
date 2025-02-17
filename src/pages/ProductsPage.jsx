import React from "react";
import ParentComponent from "../components/Parent";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function ProductsPage() {
  const currentPage = 1;
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    // Add logic to handle page change
    console.log(`Switching to page ${pageNumber}`);
  };

  return (
    <div>
      <SearchBar />
      <ParentComponent />
      <Products title = "Our Products" />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}

export default ProductsPage;
