import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import Note from './TodoList'
import { connect } from 'react-redux'
import VisibleTodos from '../containers/VisibleTodos'
import { addTodo } from '../actions'
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native'
import { BackHandler } from 'react-native';
import TodoList from './TodoList';
import { addNote1 } from '../actions'

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            text: '',
            visibilityFilter: 'SHOW_ALL_TODOS'
        }
    }

    // componentDidMount() {
    //     //     BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    //     //   }
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         if (navigation.isFocused()) {
    //             BackHandler.exitApp()
    //             return true
    //         }
    //         return false
    //     })

    // }
    //     componentWillUnmount() {
    //         BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    //     }

    //     handleBackPress = () => {

    //         return true;  // Do nothing when back button is pressed
    //     }





    // componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }

    // handleBackButtonClick() {
    //     this.props.navigation.goBack(null);
    //     return true;
    // }

    addTodo = (text) => {
        // if (this.state.text) {
        //     var d = new Date()
        //     this.state.todos.push({
        //         'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        //         'note': this.state.text
        //     })
        //     this.setState({ todos: this.state.todos, text: '' })
        // }

        if (text === '')
            alert("Please enter some text")
        else
            this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    // deleteNote(key) {
    //     this.state.todos.splice(key, 1)
    //     this.setState({ todos: this.state.todos })
    // }

    render() {

        // let notes = this.state.todos.map((val, key) => {
        //     return <Note key={key} keyval={key} val={val}
        //         deleteMethod={() => this.deleteNote(key)} />
        // })

        const { navigation } = this.props;

        return (

            <View style={styles.container}>
                <StatusBar
                    //   hidden={true}
                    backgroundColor={'#115ead'}
                    barStyle='light-content'
                />
                {/* <View style={styles.header}>
                    <Text style={styles.headerText}> My first React Native app </Text>
                </View> */}

                {/* <View style={styles.navigation}>
                    <Button
                        style={styles.flatList}
                        title="Go to FlatList"
                        onPress={() => this.props.navigation.navigate('FlatList')}
                    />
                    <Button
                        style={styles.about}
                        title="Go to About"
                        onPress={() => this.props.navigation.navigate('NewNote')}
                    />
                </View> */}
                <ScrollView style={styles.scrollContainer}>
                    {/* <VisibleTodos navigation={navigation} /> */}
                    <TodoList navigation={navigation} />
                    {/* {notes} */}
                </ScrollView>
                {/* <Button
                style={styles.navigation}
                    title="Go to About"
                    onPress={() => this.props.navigation.navigate('About')}
                /> */}

                {/* <View style={styles.footer}>
                    <TextInput
                        style={styles.footerText}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder='Enter your note here'
                        placeholderTextColor='white'
                    >
                    </TextInput>
                </View> */}

                {/* <TouchableOpacity onPress={() => this.addTodo(this.state.text)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                    onPress={() => {
                        // this.props.isEditing = false
                        this.props.navigation.navigate('NewNote')
                        // addNote1
                    }}
                style={styles.addButton}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProps(state) {
    const { todos } = state
    const { visibilityFilter } = state
    console.log("mapState: ", visibilityFilter)
    return { todoList: todos, editId: todos.id, editingId: visibilityFilter.editingId, isEditing: visibilityFilter.isEditing }
}

export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166fd3',
        borderBottomColor: '#ddd',
        borderBottomWidth: 5
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
    },
    footerText: {
        alignSelf: "stretch",
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: "absolute",
        zIndex: 11,
        right: 20,
        bottom: 20,
        backgroundColor: '#166fd3',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: 'white',
        fontSize: 45,
        bottom: 2,
    },
    navigation: {
        // position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        // backgroundColor: 'blue',
        padding: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        // top: 10,
        // bottom: 10,
        // right: 10,
    },

});
