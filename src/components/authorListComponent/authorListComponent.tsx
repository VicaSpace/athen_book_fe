import React, { useState, useEffect } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import Author from '../../models/Author'
import AuthorComponent from '../authorComponent/authorComponent'

import './authorListComponent.css'

const AuthorListComponent = () => {

    const { getAll } = useIndexedDB('author')

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        getAll().then(authorsFromDB => setAuthors(authorsFromDB))
    }, [])

    return (
        <div className='authorListContainer'>
            <div className='title'>Popular Authors</div>
            <div className='authorScrollList'>
                {authors.map((author: Author) => <AuthorComponent key={author.id} author={author}/>)}
            </div>
        </div>
    )
}

export default AuthorListComponent