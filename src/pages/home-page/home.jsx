import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
 

      <input
        type="text"
        placeholder="Mahsulot qidirish..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

        <h2 className="sena">
        Супер цена
        </h2>

      <Slider {...settings} className="carousel">
        {filteredProducts.slice(0, 10).map(product => (
          <div key={product.id} className="carousel-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
            <p><span className="price">Narx:</span> ${product.price}</p> 
            <p><span className="price">Reyting:</span> ⭐{product.rating}</p>
            <p><span className="price">Brend:</span> {product.brand}</p>
            <p><span className="price">Kategoriya:</span> {product.category}</p>
            <button className="buy-btn">Buy</button>
          
              </div>
            </Link>
          </div>
        ))}
      </Slider>

      <h2 className="home-title">Barcha mahsulotlar</h2>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
            <p><span className="price">Narx:</span> ${product.price}</p> 
            <p><span className="price">Reyting:</span> ⭐{product.rating}</p>
            <p><span className="price">Brend:</span> {product.brand}</p>
            <p><span className="price">Kategoriya:</span> {product.category}</p>
            <button className="buy-btn">Buy</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
