import TodoHeader from './components/todoHeader'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import useTodos from './hooks/useTodos'

function App() {
  const { todos, removeTodo, addTodo, setTodoDone, filter, setFilter, filteredTodos } = useTodos();

  return (
    <div className="todo-container">
      <TodoHeader />
      <TodoInput
        addTodo={addTodo}
        filter={filter}
      />
      <TodoList
        todos={todos}
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
