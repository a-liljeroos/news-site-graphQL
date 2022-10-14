import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [date, setDate] = useState(new Date());
  const localTimeLang: string = "fi-FI";
  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <header>
      <div className="header-items">
        <Link to="/news-site-template">
          <h1 className="header-title">PÄIVÄN UUTISET</h1>
        </Link>
        <div>
          <time className="header-date">
            {date.toLocaleString(localTimeLang, {
              hour: "numeric",
              minute: "numeric",
              hourCycle: "h24",
            })}
          </time>

          <time className="header-date">
            {" "}
            {date.toLocaleDateString(localTimeLang, {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </header>
  );
};

export default Header;
