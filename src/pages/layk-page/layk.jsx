
    
    import "./layk.css"
    import { useStateValue } from "../context/context";
    
    
    
    function Layk () {
          
      const { layk , setLayk} = useStateValue();
    
      const removeFromlayk = (id) => {
        setLayk((prev) => prev.filter((product) => product.id !== id));
      };
      
        
    
    
    
        return (
    <div>
    
      <div className="headerss">
        
        <h1>YOQTIRGAN MAHSULOTLAR</h1>
      </div>
    
    
        <div className="product-grid">
        {
            layk.map((product) => (
                <div key={product.id} className="product-card">
                    
                    <button className="layk" onClick={() => removeFromlayk(product.id)} type="button">❤️</button>

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
    
              
            ))
            
          }
          </div>
    </div>
    
                   
        )
      }
    
    
    
    
    export default Layk;
    
    
    
    
    
    
    
    