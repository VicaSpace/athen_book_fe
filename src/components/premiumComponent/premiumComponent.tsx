import React from 'react'
import './premiumComponent.css'
import premiumIcon from '../../assets/premium.png'

const PremiumComponent = () => {
    return (
        <div className='preContainer'>
            <div className='title'>Premium free for the next 3 Months</div>
            <img src={premiumIcon}></img>
        </div>
    )
}

export default PremiumComponent