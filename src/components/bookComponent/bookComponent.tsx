import { Box, Center } from '@chakra-ui/react'
import { Typography } from '@mui/material'
import React from 'react'
import Book from '../../models/Book'
import './bookComponent.css'

const BookComponent: React.FC<{ book: Book }> = ({ book }) => {
    console.log(book)
    return (
        <Box maxW='120' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Center><img src={book.img} width={111} height={151}></img></Center>
            <Typography className='bookName'>{book.name}</Typography>
            <Typography className='author'>{book.publisher}</Typography>
            <Typography className='price'>{'$' + book.price}</Typography>
        </Box>
    )
}

export default BookComponent