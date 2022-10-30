import React, { useEffect, useState } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import BookListComponent from '../bookListComponent/bookListComponent'
import RecentSearch from './recentSearch/recentSearch'

import './searchComponent.css'

const SearchComponent = () => {

    const [searchResults, setSearchResult] = useState([])

    const { getAll } = useIndexedDB('book')

    // init search result with default list
    useEffect(() => {
        getAll().then(booksFromDB => setSearchResult(booksFromDB))
    }, [])

    return (
        <div className='searchContainer'>
            <div>Search Bar</div>
            <RecentSearch />
            <div className='searchResultTile'>Search Result</div>
            <BookListComponent books={searchResults}/>
        </div>
    )
}

export default SearchComponent