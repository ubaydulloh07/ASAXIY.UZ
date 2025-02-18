

import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByName, setSortByName] = useState("none");
  const [sortByPrice, setSortByPrice] = useState("none");
  const [sortByRating, setSortByRating] = useState("none");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=32")
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
    autoplaySpeed: 1000,
  };

  const sortedProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortByName !== "none") {
      filtered = [...filtered].sort((a, b) =>
        sortByName === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
    }

    if (sortByPrice !== "none") {
      filtered = [...filtered].sort((a, b) =>
        sortByPrice === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    if (sortByRating !== "none") {
      filtered = [...filtered].sort((a, b) =>
        sortByRating === "asc" ? a.rating - b.rating : b.rating - a.rating
      );
    }

    return filtered;
  }, [products, searchTerm, sortByName, sortByPrice, sortByRating]);

  return (
    <div className="home">
      {/* Filter */}
      <div className="filter">
        <input
          type="text"
          placeholder="Mahsulot qidirish..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={sortByName} onChange={(e) => setSortByName(e.target.value)}>
          <option value="none">Nomi b'yicha</option>
          <option value="asc">A dan Z gacha</option>
          <option value="desc">Z dan A gacha</option>
        </select>

        <select value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
          <option value="none">Narx</option>
          <option value="asc">Eng arzon</option>
          <option value="desc">Eng qimmat</option>
        </select>

        <select value={sortByRating} onChange={(e) => setSortByRating(e.target.value)}>
          <option value="none">Reyting</option>
          <option value="asc">O'sish tartibida</option>
          <option value="desc">Kamayish tartibida</option>
        </select>
      </div>

      <h2 className="sena">Super narx</h2>

      <Slider key={sortedProducts.length} {...settings} className="carousel">
  {sortedProducts.slice(0, 10).map(product => (
    <div key={product.id} className="carousel-item">
      <img src={product.thumbnail} alt={product.title} className="product-image-2" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="carusel-text">
        <p className="old-price">{(product.price * 1.3).toLocaleString()} so'm </p>
          <p>${product.price} so'm</p>
          <div className="rating">{"⭐".repeat(Math.round(product.rating))}</div>
        </div>
        <button className="buy-now" onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}>Sotib olish</button>
      </div>
    </div>
  ))}
</Slider>


      <h2 className="home-title">Barcha mahsulotlar</h2>
      <div className="product-grid">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <div className="rating">{"⭐".repeat(Math.round(product.rating))}</div>
              <p className="old-price">{(product.price * 1.3).toLocaleString()} so'm </p>
              <p className="new-price">{product.price.toLocaleString()} so'm</p>
              <p className="installment">{(product.price / 12).toLocaleString()} so'm × 12 oy</p>
              <div className="buttons">
                <button className="buy-now" onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}>Sotib olish</button>
                <button className="add-to-cart">🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>✖</button>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className="modal-image" />
            <h2>{selectedProduct.title}</h2>
            <p><strong>Brend:</strong> {selectedProduct.brand}</p>
            <p><strong>Kategoriya:</strong> {selectedProduct.category}</p>
            <p><strong>Narx:</strong> {selectedProduct.price.toLocaleString()} so'm</p>
            <p><strong>Reyting:</strong> ⭐{selectedProduct.rating}</p>
            <p>{selectedProduct.description}</p>
            <div className="modal-buttons">
              <Link to={`/product/${selectedProduct.id}`} className="details-btn">Batafsil</Link>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;



