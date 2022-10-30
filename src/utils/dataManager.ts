import axios from 'axios'
import { useIndexedDB } from 'react-indexed-db'

import { initDB } from 'react-indexed-db'
import DBConfig from './DBConfig'

const BASE_URL='http://localhost:3000/api'

initDB(DBConfig)

const downloadData = async () => {
    await downLoadBookData()
    await downLoadAuthorData()
}

const downLoadBookData = async () => {
    // get books from server
    const { add } = useIndexedDB('book')
    await axios.get(BASE_URL + '/books').then((res) => {
        res.data.map((book) => {
            add({
                ...book,
                isBookmarked: false
            }).then(
                event => {
                    console.log('Book ID Generated: ', event)
                },
                error => {
                    console.log(error)
                }
            )
        })
    })
}

const downLoadAuthorData = async () => {
    // get authors from server
    const { add } = useIndexedDB('author')
    axios.get(BASE_URL + '/authors').then((res) => {
        res.data.map((author) => {
            add(author).then(
                event => {
                    console.log('Author ID Generated: ', event)
                },
                error => {
                    // console.log(error)
                }
            )
        })
    })
}

export {
    downloadData
}