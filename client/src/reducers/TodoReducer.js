export const initialState = {
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()
        }
    ]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                    todo: [...state.todo, {item: action.payload, completed: false, id: Date.now()}]
            }
        case 'TOGGLE_ITEM':
            return {   
                ...state,
                    todo: [...state.todo.map(listItem => {
                        if (action.payload === listItem.id) {
                          return {
                            ...listItem,
                            completed: !listItem.completed
                          }
                        } else {
                          return listItem;
                        }
                      })]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todo: state.todo.filter(item => !item.completed)
            }
        default: return state;
    }
}