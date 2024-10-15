/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/booksSlice';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.books.wishlist);
  
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
// checking if book already in wishlist
    setIsWishlisted(wishlist.some((item) => item.id === book.id));
  }, [wishlist, book.id]);

   const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(book));
    } else {
      dispatch(addToWishlist(book));
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <img
      src={book.formats['image/jpeg']}
      alt={book.title}
      className="h-40 w-full object-cover rounded-lg transition-opacity duration-300 ease-in-out"
    />
    <h2 className="text-xl font-bold mt-2">{book.title}</h2>
    <p className="text-gray-600">Authors: {book.authors.map((author) => author.name).join(', ')}</p>
    <p className="text-gray-600">ID: {book.id}</p>
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={handleWishlistToggle}
        className={`text-3xl transition-transform duration-300 ${
          isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
        }`}
        aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        ♥
      </button>
    </div>
    <Link to={`/book/${book.id}`} className="text-blue-500 underline mt-2 block">View Details</Link>
  </div>
  );
};

export default BookCard;
