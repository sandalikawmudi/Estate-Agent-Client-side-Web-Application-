import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const location = useLocation();

  // Show ONLY on property pages
  const showBackButton = location.pathname.startsWith("/property");

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* Back to Home */}
        {showBackButton ? (
          <div className="back-btn">
            <Link to="/"> ⬅ Back to Home</Link>
          </div>
        ) : (
          <div></div>
        )}

       
        <div className="nav-logo">
          PROPERTYLINK
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
