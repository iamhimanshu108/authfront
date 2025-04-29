import { assets } from "../assets/assets.js";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const { userData } = useContext(AppContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    navigate("/login"); // Navigate to the Login page
  };

  return (
    <div
      className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-3"
      style={{ minHeight: "80vh" }}
    >
      <img src={assets.header} alt="header" width={120} className="mb-4" />

      <h5 className="fw-semibold">
        Hey {userData ? userData.name : "Developer"}{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </h5>
      <h1 className="fw-bold display-5 mb-3">Welcome to our product</h1>

      <p className="text-muted fs-5 mb-4" style={{ maxWidth: "500px" }}>
        Let's start with a quick product tour and you can setup the
        authentication in no time!
      </p>

      <button
        className="btn btn-outline-dark rounded-pill px-4 py-2"
        onClick={handleGetStarted} // Add onClick handler
      >
        Get Started
      </button>
    </div>
  );
};

export default Header;
