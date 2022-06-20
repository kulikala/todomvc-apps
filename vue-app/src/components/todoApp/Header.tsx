import {
  defineComponent,
  ref
} from 'vue'
import { useTodos } from '~/composables/useTodos'

export const Header = defineComponent(() => {
  const textRef = ref<HTMLInputElement>()
  const {
    addTodo
  } = useTodos()

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()

    const current = textRef.value

    if (current?.value) {
      addTodo(current.value)

      current.value = ''
    }
  }

  return () => (
    <header class="header">
      <h1>todos</h1>
      <input
        autofocus
        class="new-todo"
        onKeydown={handleKeyDown}
        placeholder="What needs to be done?"
        ref={textRef}
      />
    </header>
  )
})
