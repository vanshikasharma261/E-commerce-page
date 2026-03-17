import { Link } from "react-router-dom";
import logo from "./assets/logo-img.png";

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>Shop Smarter with MyShop</h1>
          <p>
            Discover trending products, best deals, and premium quality items —
            all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="btn primary">Shop Now</button>
            </Link>

            <Link to="/cart">
              <button className="btn secondary">View Cart</button>
            </Link>
          </div>
        </div>

        {/* <div className="hero-right">
          <img src={logo} alt="logo" />
        </div> */}
      </section>

      {/* FEATURED */}
      <section className="featured">
        <h2>Why Choose Us?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>🚀 Fast Delivery</h3>
            <p>Quick and reliable delivery to your doorstep.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Best Prices</h3>
            <p>Affordable prices with amazing discounts.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Payment</h3>
            <p>Safe and trusted payment methods.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Exploring Now</h2>
        <Link to="/products">
          <button className="btn">Browse Products</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
