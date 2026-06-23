import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import './App.css';

export default function App() {
  const {
    todos,
    filter,
    activeCount,
    completedCount,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    setFilter,
  } = useTodos();

  return (
    <div className="app">
      <div className="card">
        <h1>TODO</h1>
        <TodoInput onAdd={addTodo} />
        <TodoFilter
          filter={filter}
          activeCount={activeCount}
          completedCount={completedCount}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
        />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
