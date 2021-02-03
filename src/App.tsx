import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import routing from './mobx/routing'

const App = observer(() => {
    const [route, setRoute] = useState<string>(routing.getCoursesPage())

    return (
        <div className='app'>
           <Sidebar route={route} setRoute={setRoute}/>
           {route === 'courses' && <Main/>}
           {route === 'tasks' && <div>tasks</div>}
           {route === 'users' && <div>users</div>}
        </div>
    )
})

export default App
