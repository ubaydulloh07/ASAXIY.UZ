import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./product.css";



const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

    const totalAmount = 72000;
    const [months, setMonths] = useState(3);
    const monthlyPayment = totalAmount / months;

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="loading">Yuklanmoqda...</p>;

  return (

<div>
        <Link to="/" className="back-button">⬅ Back</Link>

      <div className="product-detail">

    <div className="img">
      <img src={product.thumbnail} alt={product.title} className="detail-image" />
    </div>


      <div className="detail-info">
        <h2 className="detail-title">{product.title}</h2>
        <p><span className="price">Narx:</span> ${product.price}</p> 
            <p><span className="price">Reyting:</span> ⭐{product.rating}</p>
            <p><span className="price">Brend:</span> {product.brand}</p>
            <p><span className="price">Kategoriya:</span> {product.category}</p>
            <p><span className="price">Miqdori:</span> {product.stock}</p>
            <p><span className="price">Soni:</span> {product.quantity}10</p>
            
        <p className="detail-description">{product.description}</p>
        <button className="buy-button">Buy</button>
      </div>


    <div className="oylik">   

    <div className="installment-container">
      <h2>Рассрочка платежа</h2>
      <div className="installment-options">
        {[3, 6, 12].map((option) => (
          <button
            key={option}
            className={months === option ? "active" : ""}
            onClick={() => setMonths(option)}
          >
            {option} мес.
          </button>
        ))}
      </div>
      <div className="installment-details">
        <p>Рассрочка от Asaxiy</p>
       
        <p>
            <span className="price">{monthlyPayment.toLocaleString()} сум</span>
        </p>
        <p>
          Общая сумма <strong>{totalAmount.toLocaleString()} сум</strong>
        </p>
        <button className="order-btn">Заказать в рассрочку</button>
      </div>
    </div>


    </div>





    </div>
</div>
  );
};

export default ProductDetail;
