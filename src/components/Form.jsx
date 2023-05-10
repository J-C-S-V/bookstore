import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/features/books/booksSlice';
import '../styles/Form.scss';

function Form() {
  const [title, setTitle] = useState('');
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();
  return (
    <section className="form">
      <h2 className="form__h2">ADD NEW BOOK</h2>
      <form className="form__form">
        <input
          type="text"
          className="form__input"
          id="title"
          placeholder="Book title"
          onChange={handleOnChange}
        />
        <select className="form__options">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          className="form__button"
          type="button"
          onClick={() => {
            dispatch(addBook(title));
          }}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default Form;
