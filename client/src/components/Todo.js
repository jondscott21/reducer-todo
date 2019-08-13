import React from 'react';
import * as moment from 'moment'

class Todo extends React.Component {

    render() {
        return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p className={this.props.item.completed ? "completed" : ""}  onClick={() => this.props.toggleClick(this.props.item.id)}>{this.props.item.item} </p> 
                {this.props.item.completed ? <p style={{marginLeft: '10px'}}>completed {moment().format('MMMM Do YYYY, h:mm a')}</p> : null}
            </div>
        )
    }
}
export default Todo;