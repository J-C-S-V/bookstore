import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const urlId = 'UzyepzOzvkbNU3PJxe1b';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(`${url}${urlId}/books`);

  const books = Object.entries(response.data).map((item) => (
    {
      ...item[1][0],
      item_id: item[0],
    }
  ));
  return books;
});

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
    addBook: (state, action) => {
      state.books.push({
        item_id: Math.random().toString(36),
        title: action.payload,
        author: 'J.R.R. Tolkien',
        category: 'Fiction',
      });
    },
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
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
