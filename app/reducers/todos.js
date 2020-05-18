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
                    // editTitle: '',
                    // editTextL: ''
                }
            ]

        case 'EDIT_NOTE':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, id: action.id, postTitle: action.postTitle, postText: action.postText } : todo)

        case 'UPDATE_EDIT_ID':
            return [
                {
                    id: action.id,
                }
            ]


        // return [
        //     ...state, {
        //         // editId: action.editId,
        //         editTitle: action.editTitle,
        //         editText: action.editText,
        //     }
        // ]

        default:
            return state
    }
}