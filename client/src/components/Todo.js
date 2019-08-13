import React from 'react';

class Todo extends React.Component {

    render() {
        return(
            <div className={this.props.item.completed ? "completed" : ""}>
                <p onClick={() => this.props.toggleClick(this.props.item.id)}>{this.props.item.item}</p>
            </div>
        )
    }
}
export default Todo;