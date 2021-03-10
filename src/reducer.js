export default function (state, action){
    switch(action.type){
        case "add":
            return[
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]
        case "checked":
            return state.map(todo => {
                if (todo.id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo
            })
        default:
            return state
    }
}