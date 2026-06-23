import { FilterType } from '../types';

interface Props {
  filter: FilterType;
  activeCount: number;
  completedCount: number;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
}

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'すべて', value: 'all' },
  { label: '未完了', value: 'active' },
  { label: '完了済み', value: 'completed' },
];

export function TodoFilter({ filter, activeCount, completedCount, onFilterChange, onClearCompleted }: Props) {
  return (
    <div className="todo-filter">
      <span className="count">{activeCount}件の未完了タスク</span>
      <div className="filter-buttons">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            className={filter === value ? 'active' : ''}
            onClick={() => onFilterChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          完了済みを削除
        </button>
      )}
    </div>
  );
}
