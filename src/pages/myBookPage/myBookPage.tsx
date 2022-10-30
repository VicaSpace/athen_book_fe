import React, { useState, useEffect } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import BookmarkListComponent from '../../components/bookmarkListComponent/bookmarkListComponent'

import './myBookPage.css'

const MyBookPage = () => {

    const { getAll } = useIndexedDB('book')

    const [books, setBooks] = useState([])

    useEffect(() => {
        getAll().then(booksFromDB => setBooks(booksFromDB))
    }, [])

    return (
        <div>
            <div className='myBookTitle'>My Books</div>
            <BookmarkListComponent books={books} />
        </div>
    )
}

export default MyBookPage