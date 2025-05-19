import TodoHeader from './components/todoHeader'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import useTodos from './hooks/useTodos'

function App() {
  const { todos, removeTodo, addTodo, setTodoDone} = useTodos();

  return (
    <div className="todo-container">
      <TodoHeader />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} onTodoDone={setTodoDone} />
    </div>
  )
}

export default App
