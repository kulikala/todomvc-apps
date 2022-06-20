import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useFilter } from '~/hooks/useFilter'
import { useTodos } from '~/hooks/useTodos'

export const Footer = () => {
  const {
    links
  } = useFilter()
  const {
    activeTodosCount,
    clearCompletedTodos,
    completedTodosCount,
    totalTodosCount
  } = useTodos()

  return useMemo(() => (
    <footer
      className="footer"
      style={{
        display: totalTodosCount ? 'block' : 'none'
      }}
    >
      <span className="todo-count">
        <strong>{activeTodosCount}</strong> items left
      </span>
      <ul className="filters">
        {
          links.map((link, index) => (
            <li key={index}>
              <Link
                className={link.selected ? 'selected' : ''}
                to={link.to}
              >{link.label}</Link>
            </li>
          ))
        }
      </ul>
      <button
        className="clear-completed"
        onClick={clearCompletedTodos}
        style={{
          display: completedTodosCount ? 'block' : 'none'
        }}
      >
        Clear completed
      </button>
    </footer>
  ), [
    activeTodosCount,
    completedTodosCount,
    links,
    totalTodosCount
  ])
}
