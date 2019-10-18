import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './Components/Todos'
import './App.css';
import Header from './Components/layout/Header'
import AddTodo from './Components/AddTodo'
import About from './Components/pages/about'
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=5")
      .then(response => this.setState({ todos: response.data }))
  }

  //this is the toggle function to change "completed" state to true or false
  markComplete = (id) => {
    //let newState = this.state;
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo

      })
    })
  }

  //To delete Todo item
  delTodo = (id) => {
    //TO DELETE FROM SERVER
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => this.setState({
        todos: [...this.state.todos.filter
          (todo => todo.id !== id)]
      }))
  }
  addTodo = (title) => {
    //TO SEND THE NEWLY ADDED TODO ITEMS TO BACKEND - USE PORT METHOD
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    }).then(response => this.setState({ todos: [...this.state.todos, response.data] }))
  }

  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div >
      </Router >
    );
  }
}

export default App;
