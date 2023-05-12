import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import './styles/App.scss';

// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
// const urlId = 'UzyepzOzvkbNU3PJxe1b';
// const urlId = 'jFR4oVvzLHn2zV4mVVdq'; Other endpoint

// fetch(`${url}${urlId}/books`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

function App() {
  // const options = {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     item_id: '321',
  //     title: 'Halo',
  //     author: 'Harry',
  //     category: 'Science Fiction',
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // };

  // fetch(
  //   `${url}${urlId}/books`,
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
