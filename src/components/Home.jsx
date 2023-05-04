// import { Routes, Route } from 'react-router-dom';

const Home = () => {
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
        PROFILE
      </button>
    </nav>
  );
};

export default Home;
