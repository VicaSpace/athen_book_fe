import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import booksReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const booksStore = createStore(
    combineReducers({
        books: booksReducer
    }),
    composeEnhancers(
        applyMiddleware(
            // logger
        ),
    ),
)

export default booksStore