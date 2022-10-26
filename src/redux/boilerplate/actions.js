const addBookAction = (book) => ({
    type: 'ADD_BOOK',
    book,
})

const addAuthorAction = (author) => ({
    type: 'ADD_AUTHOR',
    author
})

export default {
    addBookAction,
    addAuthorAction
}