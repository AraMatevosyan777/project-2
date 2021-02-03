interface Card {
    id: number,
    date: string, 
    rating: number, 
    favorite: boolean,
    img: string
    min: number
    title: string
    lessons: number
  }

class Courses {
    _cards: Card[] = [
        {id: 1, date: '2020-01-20', rating: 100, favorite: true, img: 'https://images.unsplash.com/photo-1553460982-e4d8b24bfdd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', min: 100, title: 'title 1', lessons: 20},
        {id: 2, date: '2020-02-20', rating: 454, favorite: false, img: 'https://images.unsplash.com/photo-1590779981139-554c002ec652?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80', min: 120, title: 'title 2', lessons: 20},
        {id: 3, date: '2020-03-20', rating: 123, favorite: false, img: 'https://images.unsplash.com/photo-1510158165365-711cd25761db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', min: 244, title: 'title 3', lessons: 20},
        {id: 4, date: '2020-04-20', rating: 12, favorite: false, img: 'https://images.unsplash.com/photo-1611545815820-c1a58530d8d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', min: 454, title: 'title 4', lessons: 20},
        {id: 5, date: '2020-05-20', rating: 44, favorite: false, img: 'https://images.unsplash.com/photo-1611802647139-91d19b9bb056?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80', min: 757, title: 'title 5', lessons: 20},
        {id: 6, date: '2020-06-20', rating: 556, favorite: true, img: 'https://images.unsplash.com/photo-1569746425856-edeacffddfa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', min: 222, title: 'title 6', lessons: 20},
        {id: 7, date: '2020-07-20', rating: 79, favorite: true, img: 'https://images.unsplash.com/photo-1611444512219-da40c95ab6b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', min: 454, title: 'title 7', lessons: 20},
    ]

    getCards(): Card[]{
        return this._cards
    }

    sortByPopular(): Card[]{
        return this._cards.slice().sort((a,b) => b.rating - a.rating)
    }
    sortByFavorite(): Card[]{
        return this._cards.filter(card => card.favorite)
    }
    sortByNew(): Card[]{
        return this._cards.slice().sort((a,b) => parseInt(b.date) - parseInt(a.date))
    }


}

export default new Courses()