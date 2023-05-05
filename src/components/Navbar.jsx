// import { Routes, Route } from 'react-router-dom';
import '../styles/Navbar.scss';
const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar__a" href="https://google.com">
        Bookstore CMS
      </a>
      <ul className="navbar__ul">
        <li className="navbar__li-1">
          <a className="navbar__book" href="https://google.com">
            BOOKS
          </a>
        </li>
        <li className="navbar__li-2">
          <a className="navbar__categories" href="https://google.com">
            CATEGORIES
          </a>
        </li>
      </ul>
      <button className="navbar__button" type="button">
        <svg
          className="navbar__profile"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
