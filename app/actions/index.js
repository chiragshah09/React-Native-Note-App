import {ADD_TODO, TOGGLE_TODO, ADD_NOTE, EDIT_NOTE, UPDATE_EDIT_ID, ADD_NOTE1, UPDATE_IS_EDITING} from './actionTypes'

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

export const addNote = (postTitle, postNote, noteDate, bookmarkValue) => ({
    type: ADD_NOTE,
    id: todoID++,
    postTitle,
    postNote,
    noteDate,
    bookmarkValue
})

// export const editNote = (id, postTitle, postNote, noteDate) => ({
//     type: EDIT_NOTE,
//     editId: id,
//     editTitle: postTitle,
//     editText: postNote,
// })

export const editNote = (id, postTitle, postNote, noteDate, bookmarkValue) => ({
    type: EDIT_NOTE,
    id: id,
    postTitle: postTitle,
    postNote: postNote,
    noteDate: noteDate,
    bookmarkValue
})

export const updateEditId = (id) => ({
    type: UPDATE_EDIT_ID,
    editingId: id,
})

export const updateIsEditing = (flag) => ({
    type: UPDATE_IS_EDITING,
    isEditing: flag
})

// export const addNote1 = (id) => ({
//     type: ADD_NOTE1,
//     editingId: id,
// })