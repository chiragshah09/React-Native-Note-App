import {ADD_TODO, TOGGLE_TODO, ADD_NOTE, EDIT_NOTE, UPDATE_EDIT_ID} from './actionTypes'

nextID = 0
todoID = 0

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextID++,
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const addNote = (postTitle, postNote, noteDate) => ({
    type: ADD_NOTE,
    id: todoID++,
    postTitle,
    postNote,
    noteDate
})

// export const editNote = (id, postTitle, postNote, noteDate) => ({
//     type: EDIT_NOTE,
//     editId: id,
//     editTitle: postTitle,
//     editText: postNote,
// })

export const editNote = (id, postTitle, postNote, noteDate) => ({
    type: EDIT_NOTE,
    id: id,
    postTitle: postTitle,
    postNote: postNote,
    noteDate: noteDate,
})

export const updateEditId = (id) => ({
    type: UPDATE_EDIT_ID,
    id: id,
})