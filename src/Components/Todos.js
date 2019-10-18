import React, { Component } from 'react';
import TodoItem from './Todoitem'
import PropTypes from 'prop-types';


class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => {
            return (<TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete} />)
        })
    }
}

Todos.propType = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos;
