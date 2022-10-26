import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import booksStore from './redux/boilerplate/store'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
const theme = createTheme()

root.render(
    <React.StrictMode>
        <Provider store={booksStore}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Router>
                        <App />
                    </Router>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
