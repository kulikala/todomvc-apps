import { defineComponent } from 'vue'
import { List } from '~/components/todoApp/List'
import { useTodos } from '~/composables/useTodos'

export const Main = defineComponent(() => {
  const {
    activeTodosCount,
    toggleAllTodos,
    totalTodosCount
  } = useTodos()

  const handleChange = (event: Event) => {
    const checked = (event.target as HTMLInputElement).checked

    toggleAllTodos(checked)
  }

  return () => (
    <section
      class="main"
      style={{
        display: totalTodosCount.value ? 'block' : 'none'
      }}
    >
      <input
        checked={activeTodosCount.value === 0}
        class="toggle-all"
        id="toggle-all"
        onChange={handleChange}
        type="checkbox"
      />
      <label for="toggle-all">Mark all as complete</label>
      <List />
    </section>
  )
})
