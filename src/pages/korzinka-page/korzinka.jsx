
import "./korzinka.css"
import { useStateValue } from "../context/context";
// import { useState } from "react";


function Korzinka () {

      
  const {wishlist , setWishlist} = useStateValue();

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((product) => product.id !== id));
  };
  
    



    return (
<div>

  <div className="headerss">
    
    <h1>Sevimli mahsulotlar</h1>
  </div>


    <div className="product-grid">
    {
        wishlist.map((product) => (
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
                {/* <button onClick={() => {
                   setCount((p) => p + 1) 
                   
                }}  className="add-to-cart">🛒</button> */}

                <button className="remove" onClick={() => removeFromWishlist(product.id)}>❌</button>
              </div>
            </div>
          </div>

          
        ))
        
      }
      </div>
</div>

               
    )
  }




export default Korzinka;