import { useState } from 'react'

export default function useTodos() {
  const [todos, setTodos] = useState(fetchTodos());
  const [idCount, setIdCount] = useState(fetchTodos().at(-1)?.id + 1 || 1); // (초기 id 값 = 마지막 todo의 id + 1, 빈 배열일 경우 1)
  const [inputText, setInputText] = useState('')

  function fetchTodos() {
    const savedTodolist = localStorage.getItem("todolist");
    return savedTodolist ? JSON.parse(savedTodolist) : [];
  }

  // 초기 데이터 : 빈 배열
  if (!localStorage.getItem("todolist")) {
    localStorage.setItem("todolist", JSON.stringify([]));
  }

  const moveTodo = (idx1, idx2) => {
    const result = [...todos];
    const temp = result[idx1];
    result[idx1] = result[idx2];
    result[idx2] = temp;

    setTodos(result);
    localStorage.setItem("todolist", JSON.stringify(result));
  }

  const removeTodo = (todo) => {
    const result = todos.filter(todoitem => todoitem.id !== todo.id);

    setTodos(result);

    localStorage.setItem("todolist", JSON.stringify(result));
  }

  const addTodo = (todo, filter) => {
    const result = [...todos, { id: idCount, name: todo, isDone: filter === "done" ? true : false}];

    setIdCount(idCount + 1); // 추가될때마다 idCount 증가
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
  
	const handleInput = (event) => {
		const value = event.target.value;
		setInputText(value)
	}

	const onTodoAdd = () => {
		addTodo(inputText, filter);
		setInputText('');
	}

	const isEnterCheck = (event) => {
		if (event.key === 'Enter') {
			onTodoAdd();
		}
	}

  const [filter, setFilter] = useState("all");

	const filteredTodos = todos.filter((todo) => {
		return filter === "all" ? true :
		filter === "todo" ? !todo.isDone :
		todo.isDone;
	});


  return {todos, moveTodo, removeTodo, addTodo, setTodoDone, filter, setFilter, filteredTodos, inputText, handleInput, onTodoAdd, isEnterCheck }
}
