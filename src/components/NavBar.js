import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 961) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar_s">
        <div className="navbar-container_s">
          <Link to="/" className="navbar-logo_s" onClick={closeMobileMenu}>
            HARU
            {/* <i className="fab fa-typo3"></i> */}
            {/* <i class="fa-solid fa-apple-whole"></i> */}
            <i className="fa-solid fa-bowl-rice fa-bowl-rice-nav_s"></i>
          </Link>
          <div className="menu-icon_s" onClick={handleClick}>
            <i
              className={
                click ? "fas fa-times fa-times_s" : "fas fa-bars fa-bars_s"
              }
            ></i>
          </div>
          <ul className={click ? "nav-menu_s active" : "nav-menu_s"}>
            <li className="nav-item_s">
              <Link to="/" className="nav-links_s" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item_s">
              <Link
                to="/menu"
                className="nav-links_s"
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item_s">
              <Link
                to="/story"
                className="nav-links_s"
                onClick={closeMobileMenu}
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile_s"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle={"btn--outline_s"} linkTo="/sign-up">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
