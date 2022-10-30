import React, { useEffect, useState } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import BookListComponent from '../../components/bookListComponent/bookListComponent'
import SearchComponent from '../../components/searchComponent/searchComponent'

import './searchPage.css'

const SearchPage = () => {
    const [books, setBooks] = useState([])

    const { getAll } = useIndexedDB('book')

    useEffect(() => {
        getAll().then((booksFromDB) => setBooks(booksFromDB))
    }, [])

    return (
        <div className="searchPageContainer">
            <SearchComponent />
            <br />
            <br />
            <div className="allBookTitle">All Books</div>
            <BookListComponent books={books} />
        </div>
    )
}

export default SearchPage
