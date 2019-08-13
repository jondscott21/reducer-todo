import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { initialState, todoReducer} from './reducers/TodoReducer'

function App() {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);

const addToList = taskName => {
  if (taskName !== '') {
    dispatch({type: 'ADD_TODO', payload: taskName})
  } else {
    return taskName
  }
  
}

const toggleClick = id => {
  dispatch({type: 'TOGGLE_ITEM', payload: id})
 
}

const clearCompleted = () => {
  dispatch({type: 'REMOVE_TODO'})
  
}
  return (
    <div className='App'>
      <h2>Welcome to your Todo App!</h2>
      <TodoList todoList={todoList.todo} toggleClick={toggleClick} />
      <TodoForm addToList={addToList} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;