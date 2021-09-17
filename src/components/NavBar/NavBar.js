import "./NavBar.css";

import SearchAppBar from "./SearchBar";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav-bar">
      <span className="logo">
        <Link to="/">BIKEShop</Link>
      </span>
      <nav className="nav">
        <ul className="nav_links">
          <li>
            <Link to="/motorcycles">MOTORCYCLES</Link>
          </li>
          <li>
            <Link to="/parts">PARTS</Link>
          </li>
          <li>
            <Link to="/sale">SALE</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <span className="search">
        <SearchAppBar />
      </span>
    </header>
  );
}
