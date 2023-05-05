import '../styles/Form.scss';

function Form() {
  return (
    <section className="form">
      <h2 className="form__h2">ADD NEW BOOK</h2>
      <form className="form__form">
        <input
          type="text"
          className="form__input"
          id="title"
          placeholder="Book title"
        />
        <select className="form__options">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="form__button" type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Form;
