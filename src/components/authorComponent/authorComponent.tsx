import React from 'react'
import Author from '../../models/Author'
import './authorComponent.css'

const AuthorComponent: React.FC<{author: Author}> = ({ author }) => {
    return (
        <div className='authorContainer'>
            <div className='imgCropper'>
                <img src={author.img}/>
            </div>
            <div>{author.name}</div>
        </div>
    )
}

export default AuthorComponent