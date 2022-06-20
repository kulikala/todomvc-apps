import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { capitalize } from '~/lib/utils'
import type { Todo } from '~/composables/useTodos'

export enum Filter {
  all = 'all',
  active = 'active',
  completed = 'completed'
}

export const useFilter = () => {
  const route = useRoute()

  const currentFilter = computed(
    () => Object
      .values(Filter)
      .find(v => v === route.params.slug) ?? Filter.all
  )

  const filterTodos = (todos: Todo[]) => {
    switch (currentFilter.value) {
      case Filter.active:
        return todos.filter(item => !item.completed)

      case Filter.completed:
        return todos.filter(item => item.completed)

      default:
        return todos
    }
  }

  const links = computed(
    () => Object.values(Filter)
      .map(v => ({
        label: capitalize(v),
        to: `/${v === Filter.all ? '' : v}`,
        selected: v === currentFilter.value
      }))
  )

  return {
    currentFilter,
    filterTodos,
    links
  }
}
