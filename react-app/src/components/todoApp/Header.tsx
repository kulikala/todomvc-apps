import {
  useMemo,
  useRef,
  type KeyboardEventHandler
} from 'react'
import { useTodos } from '~/hooks/useTodos'

export const Header = () => {
  const textRef = useRef<HTMLInputElement>(null)
  const {
    addTodo
  } = useTodos()

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()

    const current = textRef.current

    if (current?.value) {
      addTodo(current.value)

      current.value = ''
    }
  }

  return useMemo(() => (
    <header className="header">
      <h1>todos</h1>
      <input
        autoFocus
        className="new-todo"
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        ref={textRef}
      />
    </header>
  ), [])
}
