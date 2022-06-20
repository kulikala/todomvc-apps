import {
  computed,
  defineComponent
} from 'vue'
import { ListItem } from '~/components/todoApp/ListItem'
import { useTodos } from '~/composables/useTodos'
import { useFilter } from '~/composables/useFilter'

export const List = defineComponent(() => {
  const {
    filterTodos
  } = useFilter()
  const {
    todos
  } = useTodos()

  const filtered = computed(
    () => filterTodos(todos?.value ?? [])
  )

  return () => (
    <ul class="todo-list">
      {
        filtered.value.map(item => (
          <ListItem
            key={item.id}
            todo={item}
          />
        ))
      }
    </ul>
  )
})
