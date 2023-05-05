import PropTypes from 'prop-types';
import '../styles/BookCard.scss';

function Book({ title, author }) {
  return (
    <article className="book">
      <div className="book__left">
        <div className="book__left-description">
          <h3 className="book__left-h3">Action</h3>
          <h2 className="book__left-h2">{title}</h2>
          <p className="book__left-p">{author}</p>
          <ul className="book__left-ul">
            <li className="book__left-li">Comments</li>
            <li className="book__left-li">Remove</li>
            <li className="book__left-li">Edit</li>
          </ul>
        </div>
        <div className="book__left-circle">
          <svg
            className="book__left-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
          <div className="book__left-percentage">
            <h2 className="book__left-h2-2">64%</h2>
            <p className="book__left-p-2">Completed</p>
          </div>
        </div>
      </div>
      <aside className="book__right">
        <h3 className="book__right-h3">CURRENT CHAPTER</h3>
        <h3 className="book__right-h3-2">Chapter 17</h3>
        <button className="book__right-button" type="button">
          UPDATE PROGRESS
        </button>
      </aside>
    </article>
  );
}

function BookList() {
  const booksDescription = [
    { title: 'The Hunger Games', author: 'Suzanne Collins' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  ];

  return (
    <div className="book-list">
      {booksDescription.map((book) => (
        <Book key={book.title} title={book.title} author={book.author} />
      ))}
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookList;
