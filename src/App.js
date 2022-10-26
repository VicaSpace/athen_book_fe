import './App.css'
import React, {useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel'
import HomePage from './pages/homePage/HomePage'
import axios from 'axios'
import { useSelector } from 'react-redux'
import addBookAction from './redux/boilerplate/actions'
import booksStore from './redux/boilerplate/store'
import { Stack } from 'react-bootstrap'
import SwitchRoutes from './routes'
import BottomNavigationBar from './components/bottomNavigationBar/bottomNavigationBar'

function App () {

    const { dispatch } = booksStore

    useEffect(() => {
        console.log('load books')
        axios('http://localhost:3000/api/books').then((req) => {
            for (let book of req.data) {
                const addBookAct = addBookAction(book)
                dispatch(addBookAct)
            }
        })
    }, [])

    return (
        <Stack>
            <SwitchRoutes/>
            <BottomNavigationBar/>
        </Stack>
    )
}

export default App
