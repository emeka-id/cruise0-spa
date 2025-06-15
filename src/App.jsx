import { useAuth0 } from "@auth0/auth0-react";
import "./tourly.css";

function App() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      {/* ===== Header/Navbar ===== */}
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src="/assets/images/logo.png" alt="Cruise0 Logo"
  style={{
    width: "80px",      
    height: "auto",       
  }}
/>
          </a>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li><a href="#home" className="navbar-link">Home</a></li>
              <li><a href="#about" className="navbar-link">About</a></li>
              <li><a href="#destination" className="navbar-link">Destinations</a></li>
              <li><a href="#package" className="navbar-link">Packages</a></li>
              <li><a href="#contact" className="navbar-link">Contact</a></li>
            </ul>
          </nav>

          <button className="nav-toggle-btn" aria-label="Toggle Menu">
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle"></p>
            <h1 className="h1 hero-title">CRUISE0: Welcome Aboard!</h1>
            <p className="hero-text">
              Discover unforgettable destinations and unparalleled comfort. Book your voyage today.
            </p>

            {/*Only Functional Button */}
            <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
              Log In to Book
            </button>
          </div>
        </div>
      </section>

      {/* ===== About Section (Visual Only) ===== */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Cruise0</h2>
          <p className="section-text">
            Cruise0 offers curated cruise experiences to world-class destinations. From the Caribbean to the Mediterranean, we bring you the best at sea.
          </p>
        </div>
      </section>

      
      {/* ===== Footer (Visual Only) ===== */}
      <footer className="footer" id="contact">
        <div className="container">
          <p className="footer-text">
            &copy; 2025 Cruise0. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
