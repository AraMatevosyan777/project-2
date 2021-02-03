import React from 'react'
import './index.scss'

type Props = {
    sortByPopular: () => void
    sortByFavorite: () => void
    sortByNew: () => void
    activeButton: string
}

const Header: React.FC<Props> = ({sortByPopular, sortByFavorite, sortByNew, activeButton}) => {
        return (
        <div className='header'>
            <div className="container">
                <div className="title">
                    <h1>Courses</h1>
                </div>
                <div className="actions">
                    <button className={activeButton === 'sortByPopular' ? 'activeButton pasiveButton' : 'passiveButton'} onClick={sortByPopular}>Popular</button>
                    <button className={activeButton === 'sortByFavorite' ? 'activeButton pasiveButton' : 'passiveButton'} onClick={sortByFavorite}>Favorite</button>
                    <button className={activeButton === 'sortByNew' ? 'activeButton pasiveButton' : 'passiveButton'} onClick={sortByNew}>New</button>
                </div>
            </div>
        </div>
    )
}

export default Header
