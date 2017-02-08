import React from 'react';
import TodoList from '../todo-list.js';
import AddTodo from './AddTodo';
require('../../scss/style.scss');
const todoList = TodoList();

const App = () => (
    <div>
    	<h1>This is the Todo List</h1>
    	<p>{todoList[0].content}</p>
        <hr />
        <AddTodo />
    </div>
);

export default App;