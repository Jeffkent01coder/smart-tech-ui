import "./App.css";
import Dropdown from "./components/Dropdown";
import Features from "./components/Features";
import FilterComponent from "./components/FilterComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ParentComponent from "./components/Parent";
import ProductView from "./components/ProductView";
import Products from "./components/Products";
import Register from "./components/Register";
import ServiceCards from "./components/ServiceCard";
import ViewMore from "./components/ViewMore";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsPage />
    </div>
  );
}

export default App;
