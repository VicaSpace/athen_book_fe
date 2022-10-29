import React, { useState, useEffect } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import Book from '../../models/Book'
import BookComponent from '../bookComponent/bookComponent'
import './bookListComponent.css'

const BookListComponent = () => {
    const { getAll } = useIndexedDB('book')

    const [books, setBooks] = useState([])

    useEffect(() => {
        getAll().then(booksFromDB => setBooks(booksFromDB))
    }, [])

    return (
        <div className='bookListContainer'>
            {books.map((book: Book) => <BookComponent key={book.id} book={book}/>)}
        </div>
    )
}

export default BookListComponent