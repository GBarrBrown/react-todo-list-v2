import React from 'react'

import { getTodos } from '../server/db/db'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos : []
        }
    }

    componentDidMount(){
        // fetch all todos from db
        this.setState({todos: getTodos()})
    }

    render() {
        return (
            <div className="Todo-container">
                <div className="Uncompleted">
                    uncompleted todo
                </div>
                <div className="Divider"></div>
                <div className="Completed">
                    completed todo
                </div>
            </div>
        )
    }
}

export default Todos