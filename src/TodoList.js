import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {/* pentru fiecare element din lista va fi randat un todo, care va avea un buton de edit si unul de delete */}
          {/* de asemenea, se va pasa key-ul de identificare a todo-ului si propietatea completed - daca este true - todo-ul va fi taiat de pe lista */}
          {/* in functie de propietatea 'completed', cand vom apasa pe checkbox functia toggleTodo va marca todo-ul ca fiind completed daca completed = false, 
        incompleted in caz contrar (o va nega) */}
          {todos.map((todo, i) => (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}{' '}
              {/* Astfel ultimul element din lista nu va mai avea un divider*/}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
