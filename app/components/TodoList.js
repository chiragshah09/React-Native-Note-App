import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TodoList = ({ todos, toggleTodo, navigation }) => (
    <View
        style={styles.note1}>
        {todos.map(
            todo =>
                <TouchableOpacity
                    key={todo.id}
                    style={styles.note}
                    onPress={() => this.props.navigation.navigate('NewNote')}
                >
                    {console.log(todo)}
                    <Text
                        numberOfLines={1}

                        style={{
                            textDecorationLine: todo.completed ? 'line-through' : 'none', paddingLeft: 0, paddingBottom: 5,
                            fontWeight: "bold", paddingRight: 80
                            // fontSize: 20,
                            // borderLeftWidth: 10,
                            // borderLeftColor: '#e91e63',
                        }}

                    // style={styles.noteText}
                    >{todo.postTitle}</Text>
                    <Text style={styles.currDate}>{todo.noteDate}</Text>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={{
                            textDecorationLine: todo.completed ? 'line-through' : 'none', paddingLeft: 0, paddingRight: 20, color: 'grey'
                            // borderLeftWidth: 10,
                            // borderLeftColor: '#e91e63',
                            // paddingBottom: 10,
                            // borderBottomWidth: 1,
                            // borderBottomColor: 'lightgrey',
                        }}

                    // style={styles.noteText}
                    >{todo.postNote}</Text>

                    {/* <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>{todo.completed ? 'Undone' : 'Done'}</Text>
                </TouchableOpacity> */}
                </TouchableOpacity>
        )}
    </View >
)

export default TodoList

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
        bottom: 10,
        right: 20,
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
        // textDecorationLine: todo.completed ? 'line-through' : 'none'
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
        // textDecorationLine: todo.completed ? 'line-through' : 'none',
        color: 'white',
    }
})