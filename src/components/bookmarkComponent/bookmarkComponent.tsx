import React from 'react'
import Book from '../../models/Book'
import './bookmarkComponent.css'

const BookmarkComponent: React.FC<{book: Book}> = ({ book }) => {
    return (
        <div className='bookmarkContainer'>
            <img src={book.img} className='bookImg'/>
            <div className='bookDetailContainer'>
                <div>{book.rate}</div>
                <div className='bookName'>{book.name}</div>
                <div className='bookAuthor'>{book.publisher}</div>
            </div>
            <div className='bookmarkDetailContainer'>
                <div>hi</div>
                <div>{book.price}</div>
            </div>
        </div>
    )
}

export default BookmarkComponent