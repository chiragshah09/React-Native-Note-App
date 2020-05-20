import React from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { addNote, editNote, toggleTodo } from '../actions'
import { StatusBar } from 'react-native'

class NewNote extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // postTitle: '',
            // postNote: '',
            postTitle: this.props.todoList[this.props.editingId]?.postTitle ? this.props.todoList[this.props.editingId].postTitle : '',
            postNote: this.props.todoList[this.props.editingId]?.postNote ? this.props.todoList[this.props.editingId].postNote : '',
            // id: this.props.todoList[0]?.editId ? this.props.todoList[0].editId :  '',

            // postTitle: (typeof this.props.todoList[0].editTitle === 'undefined') ? '' : this.props.todoList[0].editTitle,
            // postNote: this.props.todoList[0].editText == 'undefined' ? '' : this.props.todoList[0].editText,
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         postTitle: (this.props.todoList[0].editTitle === undefined) ? '' : this.props.todoList[0].editTitle, postNote: this.props.todoList[0].editText === undefined ? this.props.todoList[0].editText : '',
    //     })
    // }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.postTitle !== state.postTitle) {
    //         return {
    //             postTitle: '',
    //         };
    //     }

    //     // Return null to indicate no change to state.
    //     return null;
    // }

    addNote = (postTitle, postNote, bookmarkValue) => {
        console.log(postTitle, postNote)

        // const { route, navigation } = this.props;
        // const { bookmarkValue } = route.params;

        // var id = this.props.todoList[0]?.editId ? this.props.todoList[0].editId :  ''
        // if (this.state.text) {
        //     var d = new Date()
        //     this.state.todos.push({
        //         'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        //         'note': this.state.text
        //     })
        //     this.setState({ todos: this.state.todos, text: '' })
        // }

        if ((postTitle == '') && (postNote == ''))
            // if (title && text == '')
            alert("Please enter some text")
        else {
            var d = new Date()
            var noteDate = ''
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";

            noteDate = (d.getDate() + ' ' + month[d.getMonth()])
            console.log(noteDate)

            if (postTitle == '')
                postTitle = "Untitled"
            if (postNote == '')
                postNote = "Untitled"

            this.props.isEditing ?
                this.props.dispatch(editNote(this.props.editingId, postTitle, postNote, noteDate, bookmarkValue))

                :
                this.props.dispatch(addNote(postTitle, postNote, noteDate, bookmarkValue))

            this.setState({ postTitle: '', postNote: '' })

            // this.props.dispatch(toggleTodo(bookmarkValue))
            this.props.navigation.navigate('Home')
        }
    }

    render() {
        // const postTitle = this.props.todoList[0]?.editTitle ? this.props.todoList[0].editTitle :  ''
        // const postText = this.props.todoList[0]?.editText ? this.props.todoList[0].editText :  ''
        const { route, navigation } = this.props;

        const { bookmarkValue } = route.params;

        return (
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.container}>
                <StatusBar
                    //   hidden={true}
                    backgroundColor={'#f0f0f0'}
                    barStyle='light-content'
                />

                {console.log('edit', bookmarkValue)}

                <TextInput
                    style={styles.title}
                    // onChangeText={(text) => this.setState({ text })}
                    // value={this.state.text}
                    placeholder='Add Title'
                    // placeholderTextColor='white'
                    backgroundColor='white'
                    value={this.state.postTitle}
                    // value={postTitle}
                    onChangeText={(postTitle) => this.setState({ postTitle })}
                // onChangeText={(postTitle) => this.setState({ postTitle: postTitle })}

                >
                </TextInput>
                <TextInput
                    style={styles.note}
                    // onChangeText={(text) => this.setState({ text })}
                    // value={this.state.text}
                    placeholder='Enter your note here'
                    // placeholderTextColor='Add Note'
                    multiline={true}
                    numberOfLines={10}
                    backgroundColor='white'
                    textAlignVertical="top"
                    value={this.state.postNote}
                    // value={postText}
                    onChangeText={(postNote) => this.setState({ postNote })}
                // onChangeText={(postText) => this.setState({ postNote: postText })}
                >
                </TextInput>

                <Button
                    style={styles.addNote}
                    title="Save"
                    // onPress={() => this.props.navigation.navigate('Home')}
                    onPress={() => this.addNote(this.state.postTitle, this.state.postNote, bookmarkValue)}
                />

            </View>
            // </View>
        )
    }
}

function mapStateToProps(state) {
    const { todos } = state
    const { visibilityFilter } = state
    console.log("mapState: ", visibilityFilter)
    return { todoList: todos, editId: todos.id, editingId: visibilityFilter.editingId, isEditing: visibilityFilter.isEditing }
}

// const mapStateToProps = state => ({
//     todoList: state.todos,
//     isEditing: state.visibilityFilter.isEditing
// })

//   const mapDispatchToProps = dispatch => ({
//     editNote: (postTitle,postNote) => dispatch(editNote(postTitle,postNote))
// })
// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(mapStateToProps)(NewNote)

const styles = StyleSheet.create({
    container: {
        // borderColor: COLORS.grey20,
        // borderWidth: 1,
        // height: 10000,
        // padding: 5
        flex: 1,
        // backgroundColor: 'red',
    },
    title: {
        // height: 250,
        justifyContent: "flex-start",
        fontSize: 20,
        padding: 15,
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,
        backgroundColor: 'red',
    },
    note: {
        backgroundColor: 'red',
        // height: 250,
        justifyContent: "flex-start",
        // position: "relative",
        padding: 15,
        fontSize: 20,
        // paddingRight: 100,
        // borderBottomWidth: 2,
        // borderBottomColor: '#ededed',
        flex: 1,
    },
    addNote: {
        height: 200,
        color: 'red',
        backgroundColor: 'red',
        padding: 60,
        flex: 1,
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