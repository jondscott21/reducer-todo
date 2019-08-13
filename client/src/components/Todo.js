import React from 'react';
import * as moment from 'moment'

class Todo extends React.Component {

    render() {
        return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {this.props.item.completed ? null : <p style={{marginRight: '270px'}}>{`With${this.props.item.dueDate}`}</p>}
                <p style={{position: "absolute"}} className={this.props.item.completed ? "completed" : ""}  onClick={() => this.props.toggleClick(this.props.item.id)}>{this.props.item.item} </p> 
                {this.props.item.completed ? <p style={{marginLeft: '450px'}}>completed {moment().format('MMMM Do YYYY, h:mm a')}</p> : null}
            </div>
        )
    }
}
export default Todo;