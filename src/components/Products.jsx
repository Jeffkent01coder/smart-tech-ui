import React from "react";
import ProductCard from "./ProductCard";

function Products(props) {

  return (
    <div className="mt-8">
      <h2 className="w-full text-center text-3xl text-pink-500 font-bold">
        {props.title}
      </h2>
      <section x-data="xData()" className="py-10 px-4 md:px-12">
        <div className="flex flex-wrap justify-center gap-8 text-neutral-600 sm:flex-row">
          <ProductCard className="sm:w-full" />
          <ProductCard className="sm:w-full" />
          <ProductCard className="sm:w-full" />
          <ProductCard className="sm:w-full" />
          <ProductCard className="sm:w-full" />
          <ProductCard className="sm:w-full" />
          <ProductCard className="sm:w-full" />
          <ProductCard className="sm:w-full" />
        </div>
      </section>
    </div>
  );
}

export default Products;
