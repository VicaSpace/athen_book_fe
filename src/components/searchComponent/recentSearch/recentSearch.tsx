import React, { useEffect, useState } from 'react'

import './recentSearch.css'

const RecentSearch = () => {
    const [searches, setSearches] = useState([])

    useEffect(() => {
        const searches = localStorage.getItem('recentSearches')
        if (searches) setSearches(JSON.parse(searches))
    }, [])

    return (
        <div>
            <div className='recentSearchTitle'>Recent Searches</div>
            {searches}
        </div>
    )
}

export default RecentSearch