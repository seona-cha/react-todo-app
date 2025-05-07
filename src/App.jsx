import TodoHeader from './components/todoHeader'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import { useState } from 'react'

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const removeTodo = (todo) => {
    const result = todos.filter(todoitem => todoitem !== todo);
    
    setTodos(result);
    localStorage.removeItem(todo);
  }

  const addTodo = (todo) => {
    localStorage.setItem(todo, todo)

    setTodos((currentTodos) => {
        return [...currentTodos, todo]
    })
  }

  return (
    <div>
      <TodoHeader />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
    </div>
  )
}

export default App
