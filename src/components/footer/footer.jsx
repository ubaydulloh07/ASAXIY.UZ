import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Kompaniya</h3>
          <ul>
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Hamkorlik</a></li>
            <li><a href="#">Vakansiyalar</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Foydali</h3>
          <ul>
            <li><a href="#">Yetkazib berish</a></li>
            <li><a href="#">To'lov usullari</a></li>
            <li><a href="#">Kafolat</a></li>
            <li><a href="#">Qaytarish</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Aloqa</h3>
          <ul>
            <li><a href="#">+998 71 200 00 00</a></li>
            <li><a href="#">info@asaxiy.uz</a></li>
            <li><a href="#">Manzil: Toshkent</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Ijtimoiy tarmoqlar</h3>
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
