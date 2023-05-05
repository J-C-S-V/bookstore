import Navbar from './Navbar';
import BookCard from './BookCard';
import Form from './Form';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="books-wapper">
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <hr></hr>
      <Form />
    </div>
  );
};

export default Home;
