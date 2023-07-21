import React from 'react';
import css from './TodoList.module.css'

const TodoList = ({ todos, onDeleteTodo}) => (
  <ul className={css.todolist}>
    {todos.map(({ completed, text, id }) => (<li className={css.todolist_item} key={id}>
      <p className={css.todolist_text}>{text}</p>
      <button type='button' onClick={()=>onDeleteTodo(id)}>Delete</button></li>))}
</ul>
)


export default TodoList;