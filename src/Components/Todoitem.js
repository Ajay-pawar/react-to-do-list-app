import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    myStyles = () => {
        return {
            backgroundColor: "#f4f4f4",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            padding: "10px",
            borderBottom: "1px #ccc dotted"
        }
    }

    render() {
        const btnStyle = {
            color: "white",
            backgroundColor: "#ff0000",
            border: "none",
            borderRadius: "50%",
            float: "right",
            padding: "5px 8px"
        }
        const { id, title } = this.props.todo
        return (
            <div style={this.myStyles()}>

                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} ></input>
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propType = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default TodoItem;