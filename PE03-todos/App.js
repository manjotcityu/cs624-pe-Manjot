import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Button, Text, TouchableOpacity } from 'react-native'

import Heading from './Heading'
import Input from './Input'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '', // Holds the value of the TextInput
      todos: [],     // Holds the list of todos
      type: 'All'    // Determines the type of todos
    }
  }

  // Method to handle changes in the input
  inputChange(inputValue) {
    this.setState({ inputValue })
  }

  // Method to handle adding a new todo
  addTodo() {
    if (this.state.inputValue !== '') {
      const newTodos = [...this.state.todos, { id: Date.now(), value: this.state.inputValue, completed: false }]
      this.setState({ todos: newTodos, inputValue: '' })
    }
  }

  // Method to handle marking a todo as done
  toggleTodo = (id) => {
    const newTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    this.setState({ todos: newTodos })
  }

  // Method to handle deleting a todo
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <View>
            <Heading />
            {/* Input component */}
            <View style={styles.inputContainer}>
              <Input 
                inputValue={this.state.inputValue}
                inputChange={(text) => this.inputChange(text)} />
            </View>
            <View style={styles.buttonContainer}>
              {/* Button to add a new todo */}
              <Button 
                onPress={() => this.addTodo()}
                title="Add Todo"
                color="#000000"
                accessibilityLabel="Add new todo"
                style={styles.button}
              />
            </View>
          </View>
        </ScrollView>
        {/* Display the list of todos */}
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          {this.state.todos.map((todo, index) => (
            <View key={index} style={styles.todoItem}>
              <Text style={[styles.todoText, todo.completed && styles.completed]}>{todo.value}</Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={() => this.toggleTodo(todo.id)}>
                  <Text style={styles.buttondone}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.deleteTodo(todo.id)}>
                  <Text style={styles.buttondelete}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000'
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  todoText: {
    fontSize: 18
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#cccccc'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 5,
    marginLeft: 10,
    backgroundColor: '#cccccc',
    borderRadius: 5
  },
  buttondone: {
    padding: 5,
    marginLeft: 10,
    backgroundColor: '#cccccc',
    borderRadius: 5,
    color : "green"
  },
  buttondelete: {
    padding: 5,
    marginLeft: 10,
    backgroundColor: '#cccccc',
    borderRadius: 5,
    color : "red"
  }
  
})

export default App
