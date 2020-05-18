export default function visibilityFilter(state = {isEditing: false, editingId: -1}, action) {
    switch (action.type) {
        case 'UPDATE_EDIT_ID':
            return { ...state, editingId: action.editingId}

        // case 'ADD_NOTE':
        //     return { ...state, editingId: action.editingId, isEditing: false }

        case 'UPDATE_IS_EDITING':
            return { ...state, isEditing: action.isEditing }
    }

    return state
}
