export const initialState = {
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()
        }
    ]
}
// let arr = [1,2,3]
// arr = [0,4, 5, ...arr, 6,7]
// console.log(arr)

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