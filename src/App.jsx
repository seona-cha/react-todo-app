import TodoHeader from './components/todoHeader'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import { useState } from 'react'

function fetchTodos() {
  const result = [];
  // 로컬 스토리지에 저장된 데이터 (문자열)
  const savedTodolist = localStorage.getItem("todolist");
  // 문자열을 배열로 변환
  const todolist = JSON.parse(savedTodolist);

  for (let i = 0; i < todolist.length; i++) {
    const value = todolist[i];
    result.push(value);
  }
  return result;
}

function App() {
  const [idCount, setIdCount] = useState(1);
  const [todos, setTodos] = useState(fetchTodos());

  // 초기 데이터 : 빈 배열
  if (localStorage.length === 0) {
    localStorage.setItem("todolist", JSON.stringify(result));
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
