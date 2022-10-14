import React from "react";
import "./Footer.scss";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer-container">
        <h1 className="footer-header">Uutiset</h1>

        <Link to="/news-site-template/uutisvihje">
          <div className="footer-link">Lähetä uutisvihje</div>
        </Link>
        <Link to="/news-site-template/yhteystiedot">
          <div className="footer-link">Yhteystiedot</div>
        </Link>

        <Link to="/news-site-template/palaute">
          <div className="footer-link">Palaute</div>
        </Link>
        <Link to="/news-site-template/kayttoehdot">
          <div className="footer-link">Käyttöehdot</div>
        </Link>

        <div className="footer-copyright">© 2022 Media Suomi Oy</div>
      </div>
      <div
        onClick={() => scrollUp()}
        className="footer-container footer-container-right "
      >
        <h1 className="footer-header-right">Takaisin alkuun</h1>
        <div className="footer-icon-up">
          <MdKeyboardArrowUp size={35} color={"rgb(202, 37, 37)"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
