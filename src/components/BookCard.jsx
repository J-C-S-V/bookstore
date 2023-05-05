import '../styles/BookCard.scss';
const BookCard = () => {
  return (
    <nav className="book">
      <a className="book__a" href="https://google.com">
        Bookstore CMS
      </a>
      <ul className="book__ul">
        <li className="book__li-1">
          <a className="book__book" href="https://google.com">
            BOOKS
          </a>
        </li>
        <li className="book__li-2">
          <a className="book__categories" href="https://google.com">
            CATEGORIES
          </a>
        </li>
      </ul>
      <button className="book__button" type="button">
        <svg
          className="book__profile"
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

export default BookCard;
