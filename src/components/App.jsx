import React, { Component } from "react";
// import Counter from "./Counter";
// import Dropdown from "./Dropdown/Dropdown";
// import Colorpicker from './Colorpicker/Colorpicker'
import TodoList from "./TodoList/TodoList";

  // const colorPickerOptions = [
  //   { label: 'red', color: '#ff0000' },
  //   { label: 'green', color: '#008000' },
  //   { label: 'blue', color: '#0000FF' },
  //   { label: 'grey', color: '#808080' },
  //   { label: 'pink', color: '#9F2B68' },
  //   { label: 'indigo', color: '#4B0082' },
  // ];



class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'CSS', completed: false },
      { id: 'id-2', text: 'HTML', completed: false },
      { id: 'id-3', text: 'JavaScript', completed: false },
      { id: 'id-4', text: 'React', completed: true },
      {id:'id-5', text:'Redux', completed: false},
  ],
  }

  deleteTodos = (todoId) => {
    this.setState(prevState => ({
    todos: prevState.todos.filter(todo => todo.id !== todoId),
  }))
  }
  render() {
    const { todos } = this.state;

    return (
      <>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodos } />
        {/* <Counter initialValue={0} /> */}
        {/* <Dropdown/> */}
        {/* <Colorpicker options={colorPickerOptions } /> */}
      </>
    );
  }
}

export default App;