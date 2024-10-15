import  { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import BookDetails from './pages/BookDetails';
import { fetchBooks } from './redux/booksSlice';
import NotFound from './pages/NotFound';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="*" component={NotFound} /> 
      </Routes>
    </Router>
  );
}

export default App;
