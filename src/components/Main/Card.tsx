import React from 'react'
import playBtn from '../../accets/playBtn.png'

type Props = {
    card: {
        id: number,
        date: string,
        rating: number,
        favorite: boolean
        img: string
        min: number
        title: string
        lessons: number
    }
}

const Card: React.FC<Props> = ({ card }) => {

    return (
        <div style={{backgroundImage: `url(${card.img})`}} className='card'>
            <div className="container">
                <div className="leftCol">
                    <div className='title'>{card.title}</div>
                    <div className='lessons'>{card.lessons} lessons</div>
                </div>
                <div className="rightCol">
                    {card.min} min
                </div>
            </div>
            <img className='playBtn' src={playBtn} alt="play"/>
        </div>
    )
}

export default Card
