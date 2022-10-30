import React from 'react'
import Book from '../../models/Book'
import BookComponent from '../bookComponent/bookComponent'
import './bookListComponent.css'

const BookListComponent: React.FC<{books: Book[]}> = ({ books }) => {
    return (
        <div className='bookListContainer'>
            {books.map((book: Book) => <BookComponent key={book.id} book={book}/>)}
        </div>
    )
}

export default BookListComponent