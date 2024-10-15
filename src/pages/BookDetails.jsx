import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/booksSlice';
import { useState, useEffect } from 'react';

const BookDetails = () => {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();
  // if(!id){
  //   return <p>Loading...</p>
  //   }
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );
  const wishlist = useSelector((state) => state.books.wishlist);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Check if the book is already in the wishlist
    setIsWishlisted(wishlist.some((item) => item.id === book?.id));
  }, [wishlist, book]);

   const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(book));
    } else {
      dispatch(addToWishlist(book));
    }
  };

  if (!book) return <p className="text-center text-lg mt-10">Loading book details...</p>;
  
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-lg rounded-lg mt-10">
    <div className="flex flex-col lg:flex-row gap-8">
      <img
        src={book.formats['image/jpeg']}
        alt={book.title}
        className="w-full lg:w-1/3 h-auto rounded-md shadow-md object-cover"
      />

      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{book.title}</h1>

        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Author(s):</span>{' '}
          {book.authors.map(
            (author) => `${author.name} (${author.birth_year} - ${author.death_year})`
          ).join(', ')}
        </p>

        <p className="text-md text-gray-600 mb-4">
          <span className="font-semibold">Language:</span> {book.languages.join(', ')}
        </p>

        <p className="text-md text-gray-600 mb-4">
          <span className="font-semibold">Subjects:</span> {book.subjects.join(', ')}
        </p>

        <p className="text-md text-gray-600">
          <span className="font-semibold">Bookshelves:</span> {book.bookshelves.join(', ')}
        </p>

        <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleWishlistToggle}
          className={`text-2xl ${
            isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          } transition-colors duration-300`}
        >
          ♥
        </button>
      </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Download Count:</span> {book.download_count}
      </p>
    </div>
  </div>
  );
};

export default BookDetails;
