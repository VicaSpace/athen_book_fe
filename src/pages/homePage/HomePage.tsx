import React, { useState, useEffect } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import BookListComponent from '../../components/bookListComponent/bookListComponent'
import './homePage.css'
import avatar from '../../assets/avatar.png'
import PremiumComponent from '../../components/premiumComponent/premiumComponent'
import AuthorListComponent from '../../components/authorListComponent/authorListComponent'

const HomePage = () => {
    const { getAll } = useIndexedDB('book')

    const [books, setBooks] = useState([])

    useEffect(() => {
        getAll().then(booksFromDB => setBooks(booksFromDB))
    }, [])

    return (<div>
        <div className='homeHeader'>
            <div>
                <div className='greeting'>Hi Athen</div>
                <div className='status'>What are you reading today?</div>
            </div>
            <img src={avatar} className='avatar'></img>
        </div>
        <BookListComponent books={books}/>
        <br/><br/>
        <PremiumComponent/>
        <AuthorListComponent/>
    </div>)
}

export default HomePage