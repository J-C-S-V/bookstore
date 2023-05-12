import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/features/books/booksSlice';
import '../styles/Form.scss';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // console.log('title');
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    // console.log('author');
  };

  return (
    <section className="form">
      <h2 className="form__h2">ADD NEW BOOK</h2>
      <form className="form__form">
        <input
          type="text"
          className="form__input"
          id="title"
          placeholder="Book title"
          onChange={handleTitleChange}
        />
        <input
          type="text"
          className="form__input"
          id="author"
          placeholder="Book author"
          onChange={handleAuthorChange}
        />
        <button
          className="form__button"
          type="button"
          onClick={() => {
            dispatch(addBook({
              item_id: Math.floor(Math.random() * 100),
              title,
              author,
              category: 'Fiction',
            }));
            setTitle('');
            setAuthor('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default Form;
