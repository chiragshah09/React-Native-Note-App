export default function visibilityFilter(state = {isEditing: false}, action) {
    switch (action.type) {
        case 'UPDATE_EDIT_ID':
            return { ...state, editingId: action.editingId, isEditing: true }

        case 'ADD_NOTE':
            return { ...state, editingId: action.editingId, isEditing: false }
    }

    return state
}
