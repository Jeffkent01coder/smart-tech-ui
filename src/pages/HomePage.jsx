import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Features from "../components/Features";
import ServiceCards from "../components/ServiceCard";
import Footer from "../components/Footer";
import ViewMore from '../components/ViewMore'

function HomePage() {
  return (
    <div>
      <Header />
      <Products title = "In Stock" />
      <ViewMore/>
      <Features />
      <ServiceCards />
      <Footer />
    </div>
  );
}

export default HomePage;
