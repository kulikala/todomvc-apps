import {
  defineComponent
} from 'vue'
import { RouterLink as Link } from 'vue-router'
import { useFilter } from '~/composables/useFilter'
import { useTodos } from '~/composables/useTodos'

export const Footer = defineComponent(() => {
  const {
    links
  } = useFilter()
  const {
    activeTodosCount,
    clearCompletedTodos,
    completedTodosCount,
    totalTodosCount
  } = useTodos()

  return () => (
    <footer
      class="footer"
      style={{
        display: totalTodosCount.value ? 'block' : 'none'
      }}
    >
      <span class="todo-count">
        <strong>{activeTodosCount.value}</strong> items left
      </span>
      <ul class="filters">
        {
          links.value.map((link, index) => (
            <li key={index}>
              <Link
                class={link.selected ? 'selected' : ''}
                to={link.to}
              >{link.label}</Link>
            </li>
          ))
        }
      </ul>
      <button
        class="clear-completed"
        onClick={clearCompletedTodos}
        style={{
          display: completedTodosCount.value ? 'block' : 'none'
        }}
      >
        Clear completed
      </button>
    </footer>
  )
})
