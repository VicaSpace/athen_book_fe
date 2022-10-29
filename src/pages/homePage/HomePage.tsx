import React from 'react'
import BookListComponent from '../../components/bookListComponent/bookListComponent'
import './homePage.css'
import avatar from '../../assets/avatar.png'
import PremiumComponent from '../../components/premiumComponent/premiumComponent'
import AuthorListComponent from '../../components/authorListComponent/authorListComponent'

const HomePage = () => {
    return (<div>
        <div className='homeHeader'>
            <div>
                <div className='greeting'>Hi Athen</div>
                <div className='status'>What are you reading today?</div>
            </div>
            <img src={avatar} className='avatar'></img>
        </div>
        <BookListComponent/>
        <br/><br/>
        <PremiumComponent/>
        <AuthorListComponent/>
    </div>)
}

export default HomePage