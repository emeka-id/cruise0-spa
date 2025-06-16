import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./tourly.css";

function App() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const [searchParams] = useSearchParams();
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    const error = searchParams.get("error");
    const description = searchParams.get("error_description");

    if (error === "access_denied" && description) {
      setAuthError(decodeURIComponent(description));
    }
  }, [searchParams]);

  useEffect(() => {
    if (authError) {
      const timer = setTimeout(() => setAuthError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [authError]);

  const handleLogin = () => {
    const primaryUserId = localStorage.getItem("primaryUserId");
    const loginOptions = {
      redirectUri: window.location.origin,
    };

    if (primaryUserId) {
      loginOptions.appState = {
        primary_user_id: primaryUserId,
      };
    }

    loginWithRedirect(loginOptions);
  };

  return (
    <>
      {authError && (
        <div className="auth-error-banner" style={{
          background: "#ffe5e5",
          color: "#900",
          padding: "1em",
          textAlign: "center",
          border: "1px solid #faa",
          borderRadius: "6px",
          margin: "1rem auto",
          width: "90%",
          maxWidth: "600px",
          fontWeight: "bold"
        }}>
          ⚠️ {authError}
        </div>
      )}

      {/* ===== Header/Navbar ===== */}
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img
              src="/assets/images/logo.png"
              alt="Cruise0 Logo"
              style={{ width: "80px", height: "auto" }}
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
            <h1 className="h1 hero-title">CRUISE0: Welcome Aboard!</h1>
            <p className="hero-text">
              Discover unforgettable destinations and unparalleled comfort. Book your voyage today.
            </p>

            <button className="btn btn-primary" onClick={handleLogin}>
              Log In to Book
            </button>
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Cruise0</h2>
          <p className="section-text">
            Cruise0 offers curated cruise experiences to world-class destinations. From the Caribbean to the Mediterranean, we bring you the best at sea.
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer" id="contact">
        <div className="container">
          <p className="footer-text">&copy; 2025 Cruise0. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
