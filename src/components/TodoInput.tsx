import { useState, FormEvent } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(value);
    setValue('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="新しいタスクを追加..."
        autoFocus
      />
      <button type="submit" disabled={!value.trim()}>追加</button>
    </form>
  );
}
