import TodoHeader from './components/todoHeader'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import { useState } from 'react'

function fetchTodos() {
  const savedTodolist = localStorage.getItem("todolist");
  return savedTodolist ? JSON.parse(savedTodolist) : [];
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());
  const [idCount, setIdCount] = useState(fetchTodos().at(-1)?.id + 1 || 1); 
  // (초기 id 값 = 마지막 todo의 id + 1, 빈 배열일 경우 1)

  // 초기 데이터 : 빈 배열
  if (!localStorage.getItem("todolist")) {
    localStorage.setItem("todolist", JSON.stringify([]));  // 빈 배열로 초기화
  }

  const removeTodo = (todo) => {
    const result = todos.filter(todoitem => todoitem.id !== todo.id);
    
    setTodos(result);
    localStorage.setItem("todolist", JSON.stringify(result));
  }

  const addTodo = (todo) => {
    const result = [...todos, { id: idCount, name: todo, isDone: false}];
    setIdCount(idCount + 1);
    setTodos(result);
    localStorage.setItem("todolist", JSON.stringify(result));
  }

  const setTodoDone = (todo) => {
    const result = todos.map(item => {
      if (item.id === todo.id) {
        item.isDone = !item.isDone;
      }
      return item;
    })
    setTodos(result);
    localStorage.setItem("todolist", JSON.stringify(result));
  }

  return (
    <div>
      <TodoHeader />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} onTodoDone={setTodoDone} />
    </div>
  )
}

export default App
