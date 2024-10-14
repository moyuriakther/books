# Book Listing Application

## Overview

This Book Listing Application fetches data from the [Gutendex API](https://gutendex.com/books) and allows users to browse a collection of books. Users can search for books by title, filter them by genre, manage a wishlist, and paginate through the book list.

## Features

- **Book List**: Displays a list of books with their title, author, cover image, genre, and ID.
- **Search Functionality**: A search bar that allows users to filter books by title in real-time.
- **Genre Filter**: A dropdown to filter books based on genre/topic.
- **Wishlist**: Users can add or remove books from a wishlist, which is saved in `localStorage`. Wishlisted books are indicated with a heart icon.
- **Pagination**: Users can navigate through the book list with pagination controls.
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.

## Technologies Used

- Reactjs
- Redux toolkit
- TailwindCss - for layout and responsiveness
- React router dom - for routing

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/moyuriakther/books
2. cd books
3. npm install
4. npm run dev