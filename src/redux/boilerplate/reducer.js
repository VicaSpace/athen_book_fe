const initialState = {
    books: {}
}

const booksReducer = (
    state = initialState,
    action = {},
) => {
    switch (action.type) {
    case 'ADD_BOOK': {
        const books = state.books
        const isBookmarked = books[action.book.id] ? books[action.book.id].bookmarked : false
        books[action.book.id] = {
            ...action.book,
            bookmarked: isBookmarked
        }

        state = {
            ...state,
            books: JSON.parse(JSON.stringify(books)), // for deep copy object
        }
        console.log('ADD_BOOK ACTION')
        break
    }

    default: {
        // console.log('UNKNOWN ACTION')
    }
    }

    return state
}

const initialAuthorState = {
    authors: {}
}

const authorReducer = (
    state = initialAuthorState,
    action = {},
) => {
    switch (action.type) {
    case 'ADD_AUTHOR': {
        const authors = state.authors
        authors[action.author.id] = action.author

        state = {
            ...state,
            authors: JSON.parse(JSON.stringify(authors)), // for deep copy object
        }
        console.log('ADD_AUTHOR ACTION')
        break
    }

    default: {
        // console.log('UNKNOWN ACTION')
    }
    }

    return state
}

export default booksReducer