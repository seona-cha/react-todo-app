import TodoHeader from './components/todoHeader'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import useTodos from './hooks/useTodos'

function App() {
  const { todos, moveTodo, removeTodo, addTodo, setTodoDone, filter, setFilter, filteredTodos, inputText, handleInput, onTodoAdd, isEnterCheck } = useTodos();

  return (
    <div className="todo-container">
      <TodoHeader />
      <TodoInput
        inputText={inputText}
        handleInput={handleInput}
        onTodoAdd={onTodoAdd}
        isEnterCheck={isEnterCheck}
      />
      <TodoList
        todos={todos}
        moveTodo={moveTodo}
        onTodoRemove={removeTodo}
        onTodoDone={setTodoDone}
        filter={filter}
        setFilter={setFilter}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default App
