import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import { useState } from 'react';

const Home = () => {
  const { filteredBooks, status } = useSelector((state) => state.books);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  if (status === 'loading') return <p>Loading...</p>;

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = filteredBooks.slice(startIndex, endIndex);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
  <div>
      <h1 className="text-4xl font-bold text-center my-6">All Books</h1>
      <div className="text-center mb-4">
        <label htmlFor="items-per-page" className="mr-2">
          Items per page:
        </label>
        <select
          id="items-per-page"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value={9}>9</option>
          <option value={12}>12</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {currentBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    {/* pagination */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 border border-gray-300 rounded-l-md bg-white hover:bg-gray-200"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 border-t border-b border-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 border border-gray-300 rounded-r-md bg-white hover:bg-gray-200"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
