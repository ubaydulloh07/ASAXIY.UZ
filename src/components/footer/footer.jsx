import "./footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const [t, i18n] = useTranslation();


  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>{t('kompaniya')}</h3>
          <ul>
            <li><a href="#">{t('biz')}</a></li>
            <li><a href="#">{t('hamkorlik')}</a></li>
            <li><a href="#">{t('vakansiyalar')}</a></li>
            <li><a href="#">{t('yangiliklar')}</a></li> 
            <li><a href="#">{t('blog')}</a></li>

          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('foydali')}</h3>
          <ul>
            <li><a href="#">{t('yetkaz')}</a></li>
            <li><a href="#">{t('tolov')}</a></li>
            <li><a href="#">{t('kafolat')}</a></li>
            <li><a href="#">{t('Qaytarish')}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('Aloqa')}</h3>
          <ul>
            <li><a href="#">+998 71 200 00 00</a></li>
            <li><a href="#">info@asaxiy.uz</a></li>
            <li><a href="#">{t('Manzil')}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('tarmoqlar')}</h3>
          <div className="social-icons">
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">▶️</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Asaxiy.uz. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
