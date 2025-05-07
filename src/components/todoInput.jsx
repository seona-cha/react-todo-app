import { useState } from 'react'

function TodoInput({ addTodo }) {
	const [inputText, setInputText] = useState('')

	const handleInput = (event) => {
		const value = event.target.value;
		setInputText(value)
	}

	const onTodoAdd = () => {
		addTodo(inputText);
		setInputText('');
	}

	return (
		<div>
			<input type="text" value={inputText} onChange={handleInput} />
			<button onClick={onTodoAdd}>add</button>
		</div>
	)
}

export default TodoInput;