import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { useStateValue } from "../../pages/context/context";
import { FiShoppingCart } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { TbCarSuvFilled } from "react-icons/tb";
import { IoCardOutline } from "react-icons/io5";
import { FaScaleBalanced } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [ t , i18n] = useTranslation();

  const {wishlist , layk} = useStateValue(); 


    return (
    <header className="header">
      <div className="header-container">

        <div className="header-left">
        <div className="logo">
            <svg width="134" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.367 24.82C6.195 16.517 9.966 8.295 13.809 0h6.427c-3.306 7.144-6.362 13.975-9.655 21.124-2.844.687-5.817 1.992-8.214 3.695zm26.653 6.83c-3.533-7.671-7.06-15.343-10.594-23.012 1.08-2.32 2.107-4.665 3.227-6.965 4.213 9.173 8.43 18.344 12.665 27.505-1.743.868-3.534 1.643-5.297 2.471zM0 29.42c6.269-6.295 13.787-8.503 22.554-6.623 1.065 2.395 2.265 4.751 3.329 7.148a18.232 18.232 0 00-7.259-2.01c-3.77-.29-7.711.346-10.98 2.322-.751.495-1.6 1.013-2.145 1.743C2.67 30.652.835 29.792 0 29.42z" fill="#008DFF"/><path fillRule="evenodd" clipRule="evenodd" d="M18.414 12.954l2.579 5.62a1.325 1.325 0 01-1.403 1.862 20.376 20.376 0 00-2.744-.253c-.793-.013-1.558.02-2.294.1a.975.975 0 01-.99-1.375l2.7-5.95a1.183 1.183 0 012.152-.005z" fill="#008DFF" fillOpacity=".5"/><path d="M58.9 8.85v14.993h-3.961v-1.172c-1.34 1.082-2.99 1.623-4.95 1.623-1.98 0-3.7-.751-5.16-2.254-1.461-1.502-2.191-3.395-2.191-5.679 0-2.283.735-4.181 2.205-5.694 1.47-1.512 3.185-2.268 5.145-2.268 1.98 0 3.63.55 4.95 1.652V8.85H58.9zm-8.221 11.988c1.12 0 2.11-.415 2.97-1.247.86-.831 1.29-1.908 1.29-3.23s-.43-2.404-1.29-3.245c-.86-.841-1.85-1.262-2.97-1.262-1.22 0-2.226.41-3.016 1.232-.79.821-1.185 1.913-1.185 3.275 0 1.362.395 2.45 1.185 3.26.79.812 1.795 1.217 3.016 1.217zm9.765-.961l3.99-.811c.18 1.362 1.21 2.043 3.09 2.043.72 0 1.29-.14 1.71-.42.421-.281.631-.642.631-1.083 0-.66-.55-1.111-1.65-1.352l-3.06-.63c-1.36-.281-2.406-.792-3.136-1.533-.73-.741-1.095-1.653-1.095-2.735 0-1.462.555-2.654 1.666-3.575 1.11-.922 2.595-1.383 4.455-1.383 1.74 0 3.195.411 4.365 1.232 1.17.822 1.885 1.893 2.145 3.216l-3.78.75a2.15 2.15 0 00-.885-1.502c-.51-.38-1.165-.57-1.965-.57-.72 0-1.24.145-1.56.435-.32.29-.48.636-.48 1.037 0 .64.45 1.061 1.35 1.262l3.57.781c1.28.28 2.255.796 2.925 1.548.67.75 1.005 1.647 1.005 2.689 0 1.622-.595 2.864-1.785 3.726-1.19.861-2.785 1.292-4.785 1.292-1.78 0-3.3-.366-4.56-1.097-1.26-.731-1.98-1.838-2.16-3.32zM91.297 8.849v14.994h-3.96v-1.172c-1.34 1.082-2.99 1.623-4.95 1.623-1.98 0-3.701-.751-5.161-2.254-1.46-1.502-2.19-3.395-2.19-5.679 0-2.283.735-4.181 2.205-5.694C78.71 9.155 80.426 8.4 82.386 8.4c1.98 0 3.63.55 4.95 1.652V8.85h3.96zm-8.22 11.99c1.12 0 2.11-.416 2.97-1.248.86-.831 1.29-1.908 1.29-3.23s-.43-2.404-1.29-3.245c-.86-.841-1.85-1.262-2.97-1.262-1.22 0-2.226.41-3.016 1.232-.79.821-1.185 1.913-1.185 3.275 0 1.362.395 2.45 1.185 3.26.79.812 1.795 1.217 3.015 1.217zm21.134-4.297l5.04 7.301h-4.71l-3.271-4.747-3.24 4.747h-4.71l5.04-7.302-5.04-7.722h4.71l3.24 5.048 3.271-5.048h4.71l-5.04 7.722zm11.233 7.301h-3.96V8.85h3.96v14.994zm6.043-15.024l3.961 9.585 4.14-9.585h4.41l-7.614 17.604-1.086 2.528h-4.411l1.08-2.514 1.321-3.075-6.211-14.543h4.41zm-8.023-6.43c.69.001 1.269.239 1.736.715.467.476.7 1.038.7 1.687 0 .668-.233 1.225-.7 1.671-.467.446-1.046.669-1.736.669-.711 0-1.294-.223-1.751-.669-.457-.446-.685-1.003-.685-1.671 0-.649.233-1.21.7-1.687.467-.476 1.046-.714 1.736-.714z" fill="#13306A"/></svg>
       
        </div>
        <button className="category-btn">
          <span>&#9776;</span>{t("category")}
        </button>
        <div className="search-box">
          <input type="text" placeholder="Поиск..." />
          <button>{t('btnsubmit')}</button>
        </div>

        </div>
        <div className="header-icons">

         <div className="link-1">
           <p><FaScaleBalanced /></p>
          <Link>{t('tarozi')}</Link>
        </div>

        <div className="link-1">
          <p><IoCardOutline /></p>
          <Link>{t('oplata')}</Link>
        </div>

        <div className="link-1">
        <p> <TbCarSuvFilled /></p>
          <Link>{t('deliver')}</Link>
        </div>

        <div className="link-1">
            <p><FiShoppingCart /> <span className="badge">{wishlist.length}</span></p>
          <Link to="/korzinka"  className="cart"> {t('korzina')} </Link>
        </div>
    
            <div className="link-1">
            <p> <FaRegHeart /> <span className="badges">{layk.length}</span></p>
          <Link to="/layk" > {t('layk')} </Link>
            </div>

            <div className="link-1">
                <p><TbWorld /></p>
              <Link> {t('lng')} </Link>

            </div>

            <div className="link-1" onClick={() => setIsModalOpen(true)}>
                <p> <IoPersonOutline /></p>
          <Link> {t('login')}</Link>
            </div>

        </div>
      </div>

       {isModalOpen && (
        <div className="modal-overlay-2" onClick={() => setIsModalOpen(false)}>
          <div className="modal-2" onClick={(e) => e.stopPropagation()}>
            <h2>Вход или создать личный <br /> кабинет</h2>

          <form>
            <label htmlFor="">Телефон</label>
            <input type="telephone" placeholder="+998"/>
          </form>

              <div className="modal-btns">
            <button className="login-btn">Войти</button>
            <button className="closes-btn" onClick={() => setIsModalOpen(false)}>Закрыть</button>
              </div>

            <div className="ili">
              <div className="line"></div>
              <p>или</p>
              <div className="line"></div>
            </div>

            <div className="browser">
              <a href="https://www.google.com/">
              <button className="google">Google</button>
              </a>
              <a href="https://www.facebook.com">
              <button className="google">Facebook</button>
              </a>
              
            </div>


          </div>
        </div>
      )}



    </header>
  );
};

export default Header;





