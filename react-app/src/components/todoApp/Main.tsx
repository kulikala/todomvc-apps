import type { ChangeEventHandler } from 'react'
import { List } from '~/components/todoApp/List'
import { useTodos } from '~/hooks/useTodos'

export const Main = () => {
  const {
    activeTodosCount,
    toggleAllTodos,
    totalTodosCount
  } = useTodos()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const checked = event.target.checked

    toggleAllTodos(checked)
  }

  return (
    <section
      className="main"
      style={{
        display: totalTodosCount ? 'block' : 'none'
      }}
    >
      <input
        checked={activeTodosCount === 0}
        className="toggle-all"
        id="toggle-all"
        onChange={handleChange}
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <List />
    </section>
  )
}
