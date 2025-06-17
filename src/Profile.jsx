import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./tourly.css";

export default function Profile() {
  // Auth0 hook to access the current user and logout
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  // Local state for cruise search form
  const [startDate, setStartDate] = useState(new Date());
  const [destination, setDestination] = useState("");

  // React Router hooks for redirect and query param inspection
  const location = useLocation();
  const navigate = useNavigate();

  // This effect checks if the email verification redirect has occurred
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const success = params.get("success");

    // If success is true and the user is not yet authenticated, trigger login
    if (success && !isAuthenticated && !isLoading) {
      loginWithRedirect();
    }

    // Clean the URL once it's been handled
    if (success) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, isAuthenticated, isLoading, loginWithRedirect, navigate]);

  // If the user is not yet authenticated or user data is loading, show placeholder
  if (!isAuthenticated || !user) return <p style={{ textAlign: "center", color: "#fff" }}>Loading profile...</p>;

  // Handles the search form submission with a mock alert
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching cruises to ${destination} departing on ${startDate.toDateString()}`);
  };

  return (
    <div className="profile-bg-wrapper">
      <div className="overlay"></div>

      <div className="container profile-content">
        {/* User Info Section */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src={user.picture}
            alt={user.name}
            style={{ width: "120px", borderRadius: "50%", marginBottom: "1rem" }}
          />
          <h2 style={{ color: "white" }}>{user.name}</h2>
          <p style={{ color: "white", marginBottom: "1rem" }}>{user.email}</p>

          {/* Logout Button Only */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                logout({ returnTo: window.location.origin });
                localStorage.removeItem("primaryUserId"); // clean up if any was set
              }}
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Cruise Search Form */}
        <div className="booking-box">
          <h3 style={{ marginBottom: "1.5rem" }}>Find Your Next Cruise</h3>
          <form onSubmit={handleSearch}>
            {/* Date Picker */}
            <div className="form-group" style={{ marginBottom: "1.2rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", color: "white" }}>
                Departure Date:
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input"
              />
            </div>

            {/* Destination Dropdown */}
            <div className="form-group" style={{ marginBottom: "1.2rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", color: "white" }}>
                Destination:
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="input"
                required
              >
                <option value="">Select Destination</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Alaska">Alaska</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Hawaii">Hawaii</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Search Cruises
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
