import Navbar from './Navbar';
import BookCard from './BookCard';
import Form from './Form';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="books-wapper">
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <hr />
      <Form />
    </div>
  );
}

export default Home;
