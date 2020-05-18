import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo, updateIsEditing, editNote, updateEditId } from '../actions'

const TodoList = ({ todos, editNote, updateIsEditing, updateEditId, toggleTodo, navigation }) => (
    <View
        style={styles.note1}>
        {todos.map(
            todo =>
                <TouchableOpacity
                    key={todo.id}
                    style={styles.note}
                    onPress={() => {
                        // toggleTodo(todo.id)
                        updateIsEditing(true)
                        editNote(todo.id, todo.postTitle, todo.postNote)
                        updateEditId(todo.id)
                        navigation.navigate("NewNote")
                    }}
                >
                    {console.log("todo: ", todo)}
                    <Text
                        numberOfLines={1}

                        style={{
                            // textDecorationLine: todo.bookmarked ? 'line-through' : 'none',
                            paddingLeft: 0, paddingBottom: 5,
                            fontWeight: "bold", paddingRight: 80
                            // fontSize: 20,
                            // borderLeftWidth: 10,
                            // borderLeftColor: '#e91e63',
                        }}

                    // style={styles.noteText}
                    >{todo.postTitle}</Text>
                    <View style={styles.currDate}>
                        {todo.bookmarked ?
                            <Image style={styles.bookmark} height={20} width={20} source={require('../../assets/icons8-bookmark-48.png')} /> : null}
                        <Text style={styles.noteDate}>{todo.noteDate}</Text>
                    </View>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={{
                            // textDecorationLine: todo.bookmarked ? 'line-through' : 'none',
                            paddingLeft: 0, paddingRight: 20, color: 'grey',
                            // borderLeftWidth: 10,
                            // borderLeftColor: '#e91e63',
                            // paddingBottom: 10,
                            // borderBottomColor: 'lightgrey',
                        }}

                    // style={styles.noteText}
                    >{todo.postNote}</Text>

                    {/* <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>{todo.bookmarked ? 'Undone' : 'Done'}</Text>
                </TouchableOpacity> */}
                </TouchableOpacity>
        )}
    </View >
)

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    editNote: (id, postTitle, postNote) => dispatch(editNote(id, postTitle, postNote)),
    updateIsEditing: (flag) => dispatch(updateIsEditing(flag)),
    updateEditId: (id) => dispatch(updateEditId(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

// export default TodoList

const styles = StyleSheet.create({
    note: {
        position: "relative",
        padding: 20,
        // paddingRight: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        // borderBottomColor: 'lightgrey',
    },
    note1: {
        position: "relative",
        flex: 1,
    },
    currDate: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        color: 'grey',
        // padding: 25,
        top: 15,
        bottom: 50,
        right: 20,
        flex: 1,
        flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    noteDate: {
        color: 'grey'
    },
    bookmark: {
        right: 5,
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
        // textDecorationLine: todo.bookmarked ? 'line-through' : 'none'
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 25,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        // textDecorationLine: todo.bookmarked ? 'line-through' : 'none',
        color: 'white',
    }
})