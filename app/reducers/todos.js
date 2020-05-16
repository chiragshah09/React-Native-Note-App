export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    bookmarked: false,
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, bookmarked: !todo.bookmarked } : todo)

        case 'ADD_NOTE':
            return [
                ...state, {
                    id: action.id,
                    postTitle: action.postTitle,
                    postNote: action.postNote,
                    noteDate: action.noteDate,
                    bookmarked: false,
                }
            ]
        default:
            return state
    }
}