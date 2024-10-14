import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.books);

  return (
    <div className="p-4"> 
     <h1 className="text-4xl font-bold text-center my-6">Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {wishlist.length ? (
                    wishlist?.map((book) => <BookCard key={book.id} book={book} />)
                ) : (
            <p>No books in wishlist.</p>
                )}
        </div>
    </div>
  );
};

export default Wishlist;
