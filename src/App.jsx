import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home-page/home";
import ProductDetail from "./pages/produc-detail/product";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Korzinka from "./pages/korzinka-page/korzinka";
import  { StateProvider } from "./pages/context/context";



const App = () => {
  return (
   <StateProvider>
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/korzinka" element={<Korzinka />} />
        </Routes>
        <Footer />
      </div>
    </Router>
     </StateProvider>
  
  );
};

export default App;
