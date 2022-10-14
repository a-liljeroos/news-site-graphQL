import React, { ReactElement, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-button-group">
        <ul className="nav-links">
          <CustomLink to="/news-site-template">Etusivu</CustomLink>
          <CustomLink to={"/news-site-template/urheilu"}>Urheilu</CustomLink>
          <CustomLink to={"/news-site-template/viihde"}>Viihde</CustomLink>
          <CustomLink to={"/news-site-template/politiikka"}>
            Politiikka
          </CustomLink>
        </ul>
      </div>
    </nav>
  );
};

function CustomLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: string;
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props}>
      <li className={isActive ? "nav-links-item active" : "nav-links-item"}>
        {children}
      </li>
    </Link>
  );
}

export default Navbar;
