

import "./korzinka.css";
import { useStateValue } from "../context/context";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Korzinka() {
  const { wishlist } = useStateValue();
  const [counts, setCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let initialCounts = {};
    let initialTotal = 0;
    wishlist.forEach((product) => {
      initialCounts[product.id] = 1;
      initialTotal += product.price;
    });
    setCounts(initialCounts);
    setTotalPrice(initialTotal);
  }, [wishlist]);

  const handleIncrement = (id, price) => {
    setCounts((prev) => {
      const newCount = (prev[id] || 1) + 1;
      return { ...prev, [id]: newCount };
    });
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const handleDecrement = (id, price) => {
    setCounts((prev) => {
      const newCount = Math.max((prev[id] || 1) - 1, 1);
      return { ...prev, [id]: newCount };
    });
    setTotalPrice((prevTotal) => (counts[id] > 1 ? prevTotal - price : prevTotal));
  };

  return (
    <div>

      <div className="headerss">
        <h1>Sevimli mahsulotlar</h1>
      </div>

      <div className="content">

      <div className="content-title">
        <h2>Корзина</h2>
      </div>

    <div className="pokup">
      <button className="active">Стандартные покупки</button>
      <button className="active-2">Товары на рассрочку</button>
    </div>



      </div>





      <div className="dfll">
        <div className="product-11">
          {wishlist.map((product) => (
            <div key={product.id} className="product-1">
              <img src={product.thumbnail} alt={product.title} className="product-img" />

              <div className="ppqq">
                <h3 className="product-t">{product.title}</h3>
                <h3 className="pro-brand">{product.brand}</h3>
              </div>

              <div className="pro-count">
                <button className="minus" onClick={() => handleDecrement(product.id, product.price)}>-</button>
                <p>{counts[product.id]}</p>
                <button className="plus" onClick={() => handleIncrement(product.id, product.price)}>+</button>
              </div>

              <div className="product-2">
                <div className="product-3">
                  <p className="eski-narx">{(product.price * 1.3).toLocaleString()} so'm </p>
                  <p className="yengi-narx">{product.price.toLocaleString()} so'm</p>
                  <p className="ins">{(product.price / 12).toLocaleString()} so'm × 12 oy</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="cart-summary">
          <h3>В корзине {Object.values(counts).reduce((a, b) => a + b, 0)} товара</h3>
          <p>Общая сумма: {totalPrice.toLocaleString()} so'm</p>
          <Link to="/aformt">
          <button className="checkout-btn">ОФОРМИТЬ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Korzinka;
