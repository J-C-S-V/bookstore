import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const urlId = 'UzyepzOzvkbNU3PJxe1b';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(`${url}${urlId}/books`);

  const books = Object.entries(response.data).map((item) => ({
    ...item[1][0],
    item_id: item[0],
  }));
  return books;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(`${url}${urlId}/books`, book);
  } catch (error) {
    throw new Error(error);
  }
  console.log('post', book);
  return book;
});

// export const deleteBookAsync = createAsyncThunk(
//   'books/removeBook',
//   async (id) => {
//     try {
//       await axios.delete(`${url}${urlId}/books/${id}`);
//     } catch (error) {
//       throw new Error(error);
//     }
//     return id;
//   },
// );

// {
//   item_id: 'item1',
//   title: 'The Great Gatsby',
//   author: 'John Smith',
//   category: 'Fiction',
// }

// {
//   item_id: 'item1',
//   title: 'The Great Gatsby',
//   author: 'John Smith',
//   category: 'Fiction',
// }

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    // builder.addCase(deleteBookAsync.fulfilled, (state, action) => {
    //   state.books = state.books.filter(
    //     (book) => book.item_id !== action.payload,
    //   );
    // });
  },
});

export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
