

import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import {  useStateValue } from "../context/context";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


import { useTranslation } from "react-i18next";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByName, setSortByName] = useState("none");
  const [sortByPrice, setSortByPrice] = useState("none");
  const [sortByRating, setSortByRating] = useState("none");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const { setWishlist , wishlist ,  setLayk , layk } = useStateValue();
  
   const [ t , i18n] = useTranslation()
  
  const handeAddWishlist = (product) => {
   const isSomeWishlist = wishlist.some((item) => item.id === product.id) 


   if(isSomeWishlist) {
    setWishlist((item) => item.filter((item) => item.id !== product.id));
   }else{
    setWishlist((prev)=> [...prev , product]);
   }
   
  }

  const handeAddLayk = (product) => {
    const isSomeLayk = layk.some((item) => item.id === product.id)


    if(isSomeLayk) {
     setLayk((item) => item.filter((item) => item.id !== product.id));
    }else{
     setLayk((prev)=> [...prev , product]);
    }
  }


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




  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };








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
          <option value="none">{t('nomi')}</option>
          <option value="asc">A dan Z gacha</option>
          <option value="desc">Z dan A gacha</option>
        </select>

        <select value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
          <option value="none">{t("narx")}</option>
          <option value="asc">Eng arzon</option>
          <option value="desc">Eng qimmat</option>
        </select>

        <select value={sortByRating} onChange={(e) => setSortByRating(e.target.value)}>
          <option value="none">{ t("Reyting")}</option>
          <option value="asc">O'sish tartibida</option>
          <option value="desc">Kamayish tartibida</option>
        </select>
      </div>


      <div className="change-lang">
        <button className="uz" onClick={() => {
          i18n.changeLanguage('uz')
        }}>UZ</button>

        <button className="rus"  onClick={() => {
          i18n.changeLanguage('ru')
        }}>RU</button>

        <button className="en"  onClick={() => {
          i18n.changeLanguage('en')
        }}>EN</button>
      </div>

      <h2 className="sena">{t("super")}</h2>

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


      <h2 className="home-title">{t("barcha")}</h2>
      <div className="product-grid">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card">

<button onClick={() => handeAddLayk(product)} className="layk">
  <FaHeart
    size={25}
    style={{
      color: layk.some((item) => item.id === product.id) ? "red" : "gray",
      cursor: "pointer",
    }}
  />
</button>

            {/* <button onClick={() =>handeAddLayk(product) } className="layk">    <FaHeart
      onClick={toggleLike}
      size={30}
      style={{ color: isLiked ? "red" : "gray", cursor: "pointer" }}
    />
</button> */}


            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <div className="rating">{"⭐".repeat(Math.round(product.rating))}</div>
              <p className="old-price">{(product.price * 1.3).toLocaleString()} so'm </p>
              <p className="new-price">{product.price.toLocaleString()} so'm</p>
              <p className="installment">{(product.price / 12).toLocaleString()} so'm × 12 oy</p>
              <div className="buttons">
                <button className="buy-now" onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}>Sotib olish</button>
                <button onClick={() =>handeAddWishlist(product) } className="add-to-cart"><FaShoppingCart className="cart-icon" /></button>
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
