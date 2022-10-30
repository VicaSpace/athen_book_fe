import React from 'react'
import Book from '../../models/Book'
import BookmarkComponent from '../bookmarkComponent/bookmarkComponent'

import './bookmarkListComponent.css'

const BookmarkListComponent: React.FC<{books: Book[]}> = ({ books }) => {
    return (
        <div>
            {books.map((book) => <BookmarkComponent key={book.id} book={book}/>)}
        </div>
    )
}

export default BookmarkListComponent