import classNames from 'classnames'
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
  type KeyboardEventHandler
} from 'react'
import {
  useTodos,
  type Todo
} from '~/hooks/useTodos'

interface Props {
  todo: Todo
}

export const ListItem: FC<Props> = ({
  todo
}) => {
  const textRef = useRef<HTMLInputElement>(null)
  const [editing, setEditing] = useState(false)
  const {
    clearTodo,
    toggleTodo,
    updateTodo
  } = useTodos()

  useEffect(() => {
    const current = textRef.current

    if (editing && current) {
      current.focus()
    }
  }, [editing])

  const handleDestroy = () => clearTodo(todo)

  const handleEdit = () => {
    const current = textRef.current

    if (current) {
      current.value = todo.title
    }

    setEditing(true)
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()

    const current = textRef.current

    if (current?.value) {
      setEditing(false)
      updateTodo(todo, current.value)
    }
  }

  const handleSubmit = () => {
    setEditing(false)

    const current = textRef.current?.value
    if (current && current !== todo.title) {
      updateTodo(todo, current)
    }
  }

  const handleToggle = () => toggleTodo(todo)

  return useMemo(() => (
    <li className={classNames({
      completed: todo.completed,
      editing
    })}>
      <div className="view">
        <input
          checked={todo.completed}
          className="toggle"
          onChange={handleToggle}
          type="checkbox"
        />
        <label onClick={handleEdit}>
          {todo.title}
        </label>
        <button
          className="destroy"
          onClick={handleDestroy}
        />
      </div>
      <input
        className="edit"
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
        ref={textRef}
      />
    </li>
  ), [
    editing,
    ...Object.values(todo)
  ])
}
