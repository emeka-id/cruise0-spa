import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./tourly.css";

export default function Profile() {
  const { user, logout } = useAuth0();
  const [startDate, setStartDate] = useState(new Date());
  const [destination, setDestination] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching cruises to ${destination} departing on ${startDate.toDateString()}`);
  };

  const handleLinkAccount = () => {
    localStorage.setItem("primaryUserId", user.sub);

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

    const linkUrl = `https://${domain}/authorize?` +
      `client_id=${clientId}` +
      `&response_type=code` +
      `&scope=openid profile email` +
      `&redirect_uri=${window.location.origin}/link-callback` +
      `&prompt=login`;

    window.location.href = linkUrl;
  };

  return (
    <div className="profile-bg-wrapper">
      <div className="overlay"></div>

      <div className="container profile-content">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src={user.picture}
            alt={user.name}
            style={{ width: "120px", borderRadius: "50%", marginBottom: "1rem" }}
          />
          <h2 style={{ color: "white" }}>{user.name}</h2>
          <p style={{ color: "white", marginBottom: "1rem" }}>{user.email}</p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button
              className="btn btn-primary"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>

            <button className="btn btn-secondary" onClick={handleLinkAccount}>
              Link Another Account
            </button>
          </div>
        </div>

        <div className="booking-box">
          <h3 style={{ marginBottom: "1.5rem" }}>Find Your Next Cruise</h3>
          <form onSubmit={handleSearch}>
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

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Search Cruises
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
