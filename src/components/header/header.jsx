import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-left">
        <div className="logo">
            
          <h2>Asaxiy</h2>
        </div>
        <button className="category-btn">
          <span>&#9776;</span> Kategoriyalar
        </button>
        <div className="search-box">
          <input type="text" placeholder="Поиск..." />
          <button>Искать</button>
        </div>

        </div>
        <div className="header-icons">

         <div className="link-1">
           <p>⚖️</p>
          <Link>Сравнение</Link>
        </div>

        <div className="link-1">
          <p>💳</p>
          <Link>Оплатить</Link>
        </div>

        <div className="link-1">
        <p>🚚</p>
          <Link>Отследить</Link>
        </div>

        <div className="link-1">
            <p>🛒  <span className="badge">0</span></p>
          <Link  className="cart"> Корзина </Link>
        </div>
    
            <div className="link-1">
            <p>❤️  <span className="badges">0</span></p>
          <Link> Избранное </Link>
            </div>

            <div className="link-1">
                <p>🌐</p>
          <Link>O'zbekcha</Link>

            </div>

            <div className="link-1">
                <p>👤</p>
          <Link> Войти</Link>
            </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
