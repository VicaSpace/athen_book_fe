import './App.css'
import React from 'react'
import SwitchRoutes from './routes'
import BottomNavigationBar from './components/bottomNavicationBar/bottomNavigationBar'
import { downloadData } from './utils/dataManager'

downloadData()

function App() {
    return (
        <div className='container'>
            <SwitchRoutes className='content'/>
            <BottomNavigationBar className='navBar'/>
        </div>
    )
}

export default App
