import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductInfoPage from "./pages/ProductInfoPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from './pages/LoginPage'
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <ProductInfoPage />
=======
>>>>>>> 130b8b1b2de1b59671662cfa96c8152e816ca0b3
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/products" Component={ProductsPage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/register" Component={RegisterPage}/>
        <Route path="/contact" Component={ContactPage}/>
        <Route path="/about" Component={AboutPage}/>
        
      </Routes>
<<<<<<< HEAD
=======
>>>>>>> 8b47f9640cb83eeb0d3bedb6266c77954fd44767
>>>>>>> 130b8b1b2de1b59671662cfa96c8152e816ca0b3
    </div>
  );
}

export default App;
