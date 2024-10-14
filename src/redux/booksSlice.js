import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch books from API
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://gutendex.com/books');
  return response.data.results;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    filteredBooks: [],
    searchQuery: '',
    status: 'idle',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredBooks = state.books.filter((book) =>
        book.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    addToWishlist: (state, action) => {
      if (!state.wishlist.find((book) => book.id === action.payload.id)) {
        state.wishlist.push(action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (book) => book.id !== action.payload.id
      );
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
        state.filteredBooks = action.payload;
      });
  },
});


export const { addToWishlist, removeFromWishlist, setSearchQuery } = booksSlice.actions;
export default booksSlice.reducer;



