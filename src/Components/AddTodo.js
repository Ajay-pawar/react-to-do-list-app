import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ""
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: "" })
    }

    render() {
        return (
            <form style={{ display: "flex" }} onSubmit={this.submitHandler}>
                <input type="text" name="title" value={this.state.title} onChange={this.onChangeHandler} placeholder="Add Todo item..." style={{ flex: 6, padding: "10px" }}></input>
                <input type="submit" value="Submit" className="btn" style={{ flex: 1, padding: "10px" }}></input>
            </form>
        )
    }
}

AddTodo.propType = {
    AddTodo: PropTypes.func.isRequired
}

export default AddTodo