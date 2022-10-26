import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import SearchPage from '../pages/searchPage/searchPage'
import MyBookPage from '../pages/myBookPage/myBookPage'
import React from 'react'

const SwitchRoutes = () => {
    return (
        <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/mybook" element={<MyBookPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default SwitchRoutes