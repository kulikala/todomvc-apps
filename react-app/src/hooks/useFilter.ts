import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import type { Todo } from '~/hooks/useTodos'
import { capitalize } from '~/lib/utils'

export enum Filter {
  all = 'all',
  active = 'active',
  completed = 'completed'
}

export const useFilter = () => {
  const {
    '*': slug
  } = useParams()

  const currentFilter = useMemo(
    () => Object
      .values(Filter)
      .find(v => v === slug) ?? Filter.all,
    [slug]
  )

  const filterTodos = (todos: Todo[]) => {
    switch (currentFilter) {
      case Filter.active:
        return todos.filter(item => !item.completed)

      case Filter.completed:
        return todos.filter(item => item.completed)

      default:
        return todos
    }
  }

  const links = useMemo(
    () => Object.values(Filter)
      .map(v => ({
        label: capitalize(v),
        to: `/${v === Filter.all ? '' : v}`,
        selected: v === currentFilter
      })),
    [currentFilter]
  )

  return {
    currentFilter,
    filterTodos,
    links
  }
}
