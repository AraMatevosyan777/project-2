import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'
import { BiFoodMenu } from 'react-icons/bi'
import './index.scss'
import { observer } from 'mobx-react-lite'
import routing from '../../mobx/routing'

type Props = {
    setRoute: (route: string) => void
    route: string
}

const Sidebar: React.FC<Props> = observer(({setRoute, route}) => {
    return (
        <div className='sidebar'>
            <div className="container">
                <div className={route === 'courses' ? 'activeRoute navlink' : 'navlink'}>
                    <AiOutlineHome className='icon'  onClick={() => setRoute(routing.getCoursesPage())}/>
                </div>
                <div className={route === 'tasks' ? 'activeRoute navlink' : 'navlink'}>
                    <BiFoodMenu className='icon' onClick={() => setRoute(routing.getTasksPage())}/>
                </div>
                <div className={route === 'users' ? 'activeRoute navlink' : 'navlink'}>
                    <FiUsers className='icon' onClick={() => setRoute(routing.getUsersPage())}/>
                </div>
            </div>
        </div>
    )
})

export default Sidebar
