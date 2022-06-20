import { useMemo } from 'react'
import { ListItem } from '~/components/todoApp/ListItem'
import { useTodos } from '~/hooks/useTodos'
import { useFilter } from '~/hooks/useFilter'

export const List = () => {
  const {
    currentFilter,
    filterTodos
  } = useFilter()
  const {
    todos
  } = useTodos()

  const filtered = useMemo(
    () => filterTodos(todos),
    [
      currentFilter,
      todos
    ]
  )

  return (
    <ul className="todo-list">
      {
        filtered.map(item => (
          <ListItem
            key={item.id}
            todo={item}
          />
        ))
      }
    </ul>
  )
}
