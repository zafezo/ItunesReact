import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../common/actions/actions';

const ToDoForm = ({ dispatch }) => {
  let input;

  return (
     <div>
       <form onSubmit={ e => {
         e.preventDefault();
         if (!input.value.trim()) {
           return;
         }
         dispatch(addTodo(input.value));
         input.value = '';
       }}>
         <input ref={node => {
           input = node;
         }}/>
         <button type="submit">
           Add ToDo
         </button>
       </form>
     </div>
  );
};

const AddTodo = connect()(ToDoForm);
export default AddTodo;
