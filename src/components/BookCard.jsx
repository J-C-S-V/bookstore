import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks, deleteBookAsync } from '../redux/features/books/booksSlice';
import '../styles/BookCard.scss';

function BookList() {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <h3>Loading</h3>
    );
  }

  if (error) {
    return (
      <h3>{error}</h3>
    );
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.item_id} title={book.title} author={book.author} category={book.category} />
      ))}
    </div>
  );
}

function Book({
  title,
  author,
  category,
}) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const key = books.find((book) => book.title === title).item_id;
  return (
    <article className="book">
      <div className="book__left">
        <div className="book__left-description">
          <h3 className="book__left-h3">{category}</h3>
          <h2 className="book__left-h2">{title}</h2>
          <p className="book__left-p">{author}</p>
          <div className="book__left-buttons">
            <button type="button" className="book__left-button">Comments</button>
            <div className="book__left-vertical" />
            <button className="book__left-button" type="button" onClick={() => dispatch(deleteBookAsync(key))}>
              Remove
            </button>
            <div className="book__left-vertical" />
            <button type="button" className="book__left-button">Edit</button>
          </div>
        </div>
        <div className="book__left-circle-container">
          <div className="book__left-circle" />
          {/* <svg
            className="book__left-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg> */}
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

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookList;
