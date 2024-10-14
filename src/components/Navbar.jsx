import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/booksSlice';

export default function Navbar() {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.books.searchQuery);
  
    const handleSearch = (e) => {
      dispatch(setSearchQuery(e.target.value));
    };
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
    <h1 className="text-2xl font-bold">Book Listing</h1>
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search books..."
        className="px-4 py-2 rounded-md text-black"
      />
      <a href="/" className="hover:text-gray-400">
        Home
      </a>
      <a href="/wishlist" className="hover:text-gray-400">
        Wishlist
      </a>
    </div>
  </nav>
  )
}
