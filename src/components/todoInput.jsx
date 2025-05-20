import { useState } from 'react'

function TodoInput({ inputText, handleInput, onTodoAdd, isEnterCheck }) {

	return (
		<div className="todo-input-container">
			<input type="text" value={inputText} onChange={handleInput} onKeyDown={isEnterCheck}/>
			<button onClick={onTodoAdd}>추가</button>
		</div>
	)
}

export default TodoInput;