import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="items">
          <div className="first">
            <h6>Logo</h6>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                <Link to="/annonces">Annonces</Link>
                </li>
                <li>
                <Link to="#">Mon compte</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="second">
            <h6>A propos de nous</h6>
            <div className>
              <ul>
                <li><a href="#">Faq</a></li>
                <li><a href="#">Nous contacter</a></li>
              </ul>
            </div>
          </div>
          <div className="third">
            <h6>Nous suivre</h6>
            <div className="socials">
              <ul>
                <li><a href="#"><i className="fas fa-facebook"></i></a></li>
                <li><a href="#"><i className="fas fa-twitter"></i></a></li>
                <li><a href="#"><i className="fas fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
