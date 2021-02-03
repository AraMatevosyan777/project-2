import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import Header from '../Header/Header'
import courses from '../../mobx/courses'
import './index.scss'
import Card from './Card'
import { Scrollbars } from 'react-custom-scrollbars';

const Main = observer(() => {
    const [cards, setCards] = useState(courses.sortByPopular())
    const [activeButton, setActive] = useState('sortByPopular')

    const sortByPopular = () => {
        setCards(courses.sortByPopular())
        setActive('sortByPopular')
    }
    const sortByFavorite = () => {
        setCards(courses.sortByFavorite())
        setActive('sortByFavorite')
    }
    const sortByNew = () => {
        setCards(courses.sortByNew())
        setActive('sortByNew')
    }

    return (
        <div className='main'>
            <Header activeButton={activeButton} sortByPopular={sortByPopular} sortByFavorite={sortByFavorite} sortByNew={sortByNew} />
            <div className="content">
                <Scrollbars className='scrollBar' 
                    renderTrackVertical={props =>  <div style={props.style} className="track-vertical"/>}
                    renderThumbVertical={props => <div style={props.style} className="thumb-vertical"/>}
                    renderView={props => <div style={props.style} className="view"/>}
                >
                    
                    {cards.map(card => <Card key={card.id} card={card}/>)}
                </Scrollbars>
            </div>
        </div>
    )
})

export default Main
