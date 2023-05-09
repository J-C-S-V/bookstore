import { useSelector } from 'react-redux';
import Navbar from './Navbar';

function Categories() {
  const status = useSelector((state) => state.categories.status);

  return (
    <div className="home">
      <Navbar />
      <div className="categories">{status}</div>
      <hr />
    </div>
  );
}

export default Categories;
