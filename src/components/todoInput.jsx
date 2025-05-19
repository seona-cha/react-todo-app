import { useState } from 'react'

function TodoInput({ addTodo, filter }) {
	const [inputText, setInputText] = useState('')

	const handleInput = (event) => {
		const value = event.target.value;
		setInputText(value)
	}

	const onTodoAdd = () => {
		addTodo(inputText, filter);
		setInputText('');
	}

	return (
		<div className="todo-input-container">
			<input type="text" value={inputText} onChange={handleInput} />
			<button onClick={onTodoAdd}>추가</button>
		</div>
	)
}

export default TodoInput;