import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import BookComponent from '../../components/bookComponent/bookComponent'
import HomePageHeader from './header/homePageHeader'
import { useSelector } from 'react-redux'
import Book from '../../models/Book'
import BookListComponent from '../../components/bookListComponent/bookListComponent'

function HomePage () {
    const bookState = useSelector((state: any) => state.books) // consumer

    return (
        <Box>
            <HomePageHeader></HomePageHeader>
            <BookListComponent books={bookState.books}/>
        </Box>
    )
}

export default HomePage