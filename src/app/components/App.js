import React from 'react';
import AddTodo from '../containers/AddTodo';
import Footer from '../components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <h1>ToDoLister</h1>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
);

export default App;
