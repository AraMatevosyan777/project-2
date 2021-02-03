interface Route {
    courses: string
    tasks: string
    users: string
  }

class Routing {
    _routes: Route = {
        courses: 'courses',
        tasks: 'tasks',
        users: 'users',
    }

    getCoursesPage(): string{
        return this._routes.courses
    }
    getTasksPage(): string{
        return this._routes.tasks
    }
    getUsersPage(): string{
        return this._routes.users
    }

}

export default new Routing()