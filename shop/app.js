const { useState } = React;

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    {
      id: 1,
      name: "Stormproof Torch Lighter",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "classic"
    },
    {
      id: 2,
      name: "Vintage Zippo Style",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "classic"
    },
    {
      id: 3,
      name: "Eco-Friendly USB Lighter",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "eco"
    }
  ];
  
  const categories = [
    {
      name: "Classic Lighters",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/classic"
    },
    {
      name: "Eco-Friendly Lighters",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/eco"
    },
    {
      name: "Gift Sets",
      image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "/gifts"
    }
  ];
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  
  return (
    <div className="app">
      {/* Navigation */}
      <nav>
        <div className="logo">LighterWorld</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="search-cart">
          <input type="text" placeholder="Search lighters..." />
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartItems.length}</span>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero">
        <h1>FIND YOUR PERFECT LIGHTER</h1>
        <p>Premium lighters for every occasion and collector</p>
        <button className="cta-button">SHOP NOW</button>
      </section>
      
      {/* Featured Products */}
      <section className="featured">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Categories */}
      <section className="categories">
        <h2 className="section-title">Browse Categories</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <img src={category.image} alt={category.name} className="category-img" />
              <div className="category-overlay">
                <h3>{category.name}</h3>
                <a href={category.link} className="view-collection">View Collection</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@lighterworld.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Flame St, Burn City</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="/shipping">Shipping & Returns</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
            <p>Subscribe to our newsletter</p>
            <input type="email" placeholder="Your email" />
            <button className="cta-button" style={{padding: '0.5rem 1rem'}}>Subscribe</button>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 LighterWorld. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));