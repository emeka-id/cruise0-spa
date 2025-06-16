import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: redirectUri }}
  >
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </Auth0Provider>
);