import { Todo } from '../types';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <button
        className="checkbox"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? '未完了にする' : '完了にする'}
      >
        {todo.completed && (
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <span className="text">{todo.text}</span>
      <button
        className="delete"
        onClick={() => onDelete(todo.id)}
        aria-label="削除"
      >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </li>
  );
}
