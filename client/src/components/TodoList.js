import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {

    render() {
        return(
            <div>
                {this.props.todoList.map(el => <Todo key={el.id} toggleClick={this.props.toggleClick} item={el} />)}
            </div>
        );
    }
}

export default TodoList;
