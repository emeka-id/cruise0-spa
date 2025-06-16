import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LinkCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const primaryUserId = localStorage.getItem("primaryUserId");

    if (primaryUserId) {
      const params = new URLSearchParams(window.location.search);
      const state = params.get("state");

      // Redirect again with primary_user_id
      window.location.href = `https://YOUR_DOMAIN/continue?state=${state}&primary_user_id=${primaryUserId}`;
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <p>Linking your account...</p>;
}

export default LinkCallback;
