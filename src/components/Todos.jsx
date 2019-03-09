import React from 'react'

class Todos extends React.Component {
    render() {
        return (
            <div className="Todo-container">
                <div className="Uncompleted">
                    uncompleted todo
                </div>
                <div className="Horizontal-Divider"></div>
                <div className="Completed">
                    completed todo
                </div>
            </div>
        )
    }
}

export default Todos