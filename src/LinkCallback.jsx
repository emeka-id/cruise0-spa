import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LinkCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const primaryUserId = localStorage.getItem("primaryUserId");

    if (primaryUserId) {
      const params = new URLSearchParams(window.location.search);
      const state = params.get("state");

      // Clean up: remove from localStorage to avoid leaking into normal login
      localStorage.removeItem("primaryUserId");

      // Redirect to Auth0 /continue endpoint with primary user ID
      const domain = import.meta.env.VITE_AUTH0_DOMAIN;
      window.location.href = `https://${domain}/continue?state=${state}&primary_user_id=${primaryUserId}`;
    } else {
      // If no ID is stored, return user to home
      navigate("/");
    }
  }, [navigate]);

  return <p>Linking your account...</p>;
}

export default LinkCallback;
