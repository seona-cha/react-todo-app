import { useState } from 'react'

export default function todoStorage() {
  const fetchTodos = () => {
		const savedTodolist = localStorage.getItem("todolist");
		return savedTodolist ? JSON.parse(savedTodolist) : [];
	}

	return { fetchTodos };
}