import React, { useState } from 'react';

function TodoForm(props) {
    const [item, setItem] = useState('');

    const handleChange = event => {
       setItem(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();       
    }

    const clearAndSubmitAdd = () => {
        props.addToList(item)
        setItem('')
    }

    return(
        <form  onSubmit={handleSubmit}>
            <input className='task-input' placeholder="Enter Your Task Here" name='item' onChange={handleChange} value={item} type='text'></input>
            <div>   
            <button className='btn add-btn' onClick={clearAndSubmitAdd}>Add Todo</button>
            <button className='btn clear-btn' onClick={props.clearCompleted}>Clear Completed</button>
            </div>
        </form>
    );
}

export default TodoForm;