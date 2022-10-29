import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import HomePage from '../pages/homePage/homePage'
import SearchPage from '../pages/searchPage/searchPage'
import MyBookPage from '../pages/myBookPage/myBookPage'

const SwitchRoutes = () => {
    return (
        <Routes>
            <Route path ='/home' element={<HomePage/>}/>
            <Route path ='/search' element={<SearchPage/>}/>
            <Route path = '/mybook' element={<MyBookPage/>}/>

            <Route path='*' element={<Navigate to='/home'/>}></Route>
        </Routes>
    )
}

export default SwitchRoutes