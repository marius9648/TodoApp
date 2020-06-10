import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';

function TodoApp() {
  // initialTodos va fi initializat ca un array gol daca nu mai exista todo-uri, iar pe masura ce vom adauga todo-uri acestea vor fi salvate in localStorage
  // iar cand vom da refresh acestea vor fi inca acolo
  // dupa ce vor fi salvate, initialTodos le va contine pe aceastea si le va parsa din JSON 
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const [todos, setTodos] = useState(initialTodos);

  // de fiecare data cand componenta va fi randata, se va salva in localStorage
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText) => {
    // folosind libraria uuid, vor fi generate id-uri unice
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  const removeTodo = (todoId) => {
    // filtreaza todo-urile care nu au id-ul respectiv si vom obtine un array cu cele ramase
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // folosind setTodos, lista de todo-uri va fi updatata in functie de filtrare
    setTodos(updatedTodos);
  };

  // cu ajutorul acestei metode fiecare todo va avea posibilitatea de a fi toggled intre 'completat' si 'necompletat'
  const toggleTodo = (todoId) => {
    // folosind destructuring, celelalte propietati vor fi puse in ...todo, iar 'completed' va putea fi toggled
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  // cu ajutorul acestei metode vom lua todo-ul pe care vrem sa il editam si vom updata task-ul in functie de ce introducem in input field
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
