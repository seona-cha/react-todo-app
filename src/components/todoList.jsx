import { useState } from "react";

function TodoList({ todos, onTodoRemove, onTodoDone }) {
	const [filter, setFilter] = useState("all");

	const filteredTodos = todos.filter((todo) => {
		return filter === "all" ? true :
		filter === "todo" ? !todo.isDone :
		todo.isDone;
	});

	return (
		<div className="todo-list-container">
			{todos.length === 0 ? (
				<div>할 일이 없습니다.</div>
			) : (
				<div>
					<div className="filter-container">
						<select value={filter} onChange={(e) => setFilter(e.target.value)}>
							<option value="all">전체</option>
							<option value="todo">해야 할 일</option>
							<option value="done">완료한 일</option>
						</select>
					</div>
					<ul>
						{filteredTodos.map((todo) => {
							return (
								<li className={todo.isDone ? "done" : ""} key={todo.id}>
					<input type="checkbox" defaultChecked={todo.isDone} onChange={() => onTodoDone(todo)} />
									<span>{todo.name}</span>
									<button onClick={() => onTodoRemove(todo)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
											<path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</button>
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</div>
	)
}

export default TodoList;