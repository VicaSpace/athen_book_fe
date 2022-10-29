import React from 'react'
import Book from '../../models/Book'

import './bookComponent.css'

const BookComponent: React.FC<{book: Book}> = ({ book }) => {
    return (
        <div className='bookComponentContainer'>
            <div>
                <img src={book.img} className='bookImg'></img>
            </div>
            <div className='bookName'>{book.name}</div>
            <div className='bookAuthor'>{book.publisher}</div>
            <div>
                <span className='bookPrice'>${Math.floor(book.price)}</span>
                <span className='bookPrice1'>.{((book.price+'').split('.')[1] ?? '').padEnd(2, '0')}</span>
            </div>
        </div>
    )
}

export default BookComponent