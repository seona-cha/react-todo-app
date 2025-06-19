import { useRef, useState } from "react";

function TodoList({ todos, moveTodo, updateTodo, changeUpdateMode, onTodoRemove, onTodoDone, filter, setFilter, filteredTodos }) {
  const dragItemIndex = useRef(null);

  const dragStart = (e, idx) => {
    e.target.style.transform = "scale(0.9)";
    e.target.style.opacity = "0.5";

    dragItemIndex.current = idx;
  }

  const dragEnd = (e) => {
    e.target.style.removeProperty('transform');
    e.target.style.removeProperty('opacity');
  }

  const dragEnter = (e) => {
    e.target.style.color = "rgb(58, 172, 170)";
  }

  const dragLeave = (e) => {
    e.target.style.removeProperty('color');
  }

  const drop = (e, idx) => {
    e.target.style.removeProperty('color');
    moveTodo(dragItemIndex.current, idx);
  }
  
  const dragOver = (e) => {
    e.preventDefault();
  }


	return (
		<div className="todo-list-container">
			<div className="filter-container">
				<button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>✅ 전체 <small>({todos.length})</small></button>
				<button className={filter === "todo" ? "active" : ""} onClick={() => setFilter("todo")}>💣 해야 할 일 <small>({todos.filter(todo => !todo.isDone).length})</small></button>
				<button className={filter === "done" ? "active" : ""} onClick={() => setFilter("done")}>🏆 완료한 일 <small>({todos.filter(todo => todo.isDone).length})</small></button>
			</div>
			{filteredTodos.length === 0 && filter !== "done" ? (
				<div className="empty-box">할 일이 없습니다. <br /> dobby is free</div>
			) : filteredTodos.length === 0 && filter === "done" ? (
        <div className="empty-box">한 게 없습니다. <br /> 뭐라도 좀 해 볼까요?</div>
      ) : (
				<div>
					<ul>
						{filteredTodos.map((todo, index) => {
							return (
            <li 
              className={todo.isDone ? "done" : ""} 
              key={todo.id} 
              draggable={!todo.isUpdateMode} 
              onDragStart={(e) => dragStart(e, index)} 
              onDragEnd={dragEnd} 
              onDragEnter={dragEnter} 
              onDragLeave={dragLeave} 
              onDrop={(e) => drop(e, index)}
              onDragOver={dragOver} 
            >
            <input id={todo.id} type="checkbox" defaultChecked={todo.isDone} onChange={() => onTodoDone(todo)} />
            {todo.isUpdateMode ? 
            (
              <input className="update-input" type="text" value={todo.name} onChange={(e) => updateTodo(todo, e.target.value)} />
            ) : (
              <label htmlFor={todo.id}>{todo.name}</label>
            )
              }
              <button onClick={() => changeUpdateMode(todo)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
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