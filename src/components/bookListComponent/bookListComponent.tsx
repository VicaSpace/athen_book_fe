import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import BookComponent from '../bookComponent/bookComponent'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { keyboard } from '@testing-library/user-event/dist/keyboard'

const BookListComponent: React.FC<{ books: any }> = ({ books }) => {
    console.log(books)

    const [booksData, setBookData] = useState()

    return (
        <ScrollMenu>
            {/* {[...Array(9)].map((e, i) => <BookComponent key={i} book={books[i as unknown as string]}/>)} */}
            <BookComponent book={books[1]}/>
            <BookComponent book={books[2]}/>
            <BookComponent book={books[3]}/>
            <BookComponent book={books[4]}/>
            <BookComponent book={books[5]}/>
        </ScrollMenu>  
    )
}

export default BookListComponent