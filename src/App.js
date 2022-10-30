import './App.css'
import React from 'react'
import SwitchRoutes from './routes'
import BottomNavigation from './components/bottomNavigationComponent/bottomNavigationComponent'
import { downloadData } from './utils/dataManager'
import {
    AiFillHome,
    AiOutlineHome,
    AiOutlineBook,
    AiFillBook,
} from 'react-icons/ai'
import { HiSearchCircle, HiOutlineSearchCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

downloadData()

function App() {
    const navigate = useNavigate()
    const botNavItems = [
        {
            title: 'Home',
            icon: <AiOutlineHome />,
            activeIcon: <AiFillHome />,
            onClick: () => {
                navigate('/home')
            },
        },
        {
            title: 'Search',
            icon: <HiOutlineSearchCircle />,
            activeIcon: <HiSearchCircle />,
            onClick: () => {
                navigate('/search')
            },
        },
        {
            title: 'My Books',
            icon: <AiOutlineBook />,
            activeIcon: <AiFillBook />,
            onClick: () => {
                navigate('/mybook')
            },
        },
    ]
    return (
        <div className="container">
            <SwitchRoutes className="content" />
            <BottomNavigation
                items={botNavItems}
                defaultSelected={0}
                className="navBar"
            />
        </div>
    )
}

export default App
