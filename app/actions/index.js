import {ADD_TODO, TOGGLE_TODO, ADD_NOTE} from './actionTypes'

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