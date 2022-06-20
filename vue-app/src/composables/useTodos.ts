import {
  computed,
  inject,
  provide,
  type InjectionKey
} from 'vue'
import { v4 as uuid } from 'uuid'
import { useState } from '~/composables/useState'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

const initTodosStore = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const totalTodosCount = computed(
    () => todos.value.length ?? 0
  )

  const completedTodosCount = computed(
    () => todos.value.filter(todo => todo.completed).length ?? 0
  )

  const activeTodosCount = computed(
    () => totalTodosCount.value - completedTodosCount.value
  )

  const addTodo = (title: string) => {
    setTodos(current => [
      ...current,
      {
        id: uuid(),
        title,
        completed: false
      }
    ])
  }

  const clearTodo = (todo: Todo) => {
    setTodos(current => current.filter(item => item.id !== todo.id))
  }

  const clearCompletedTodos = () => {
    setTodos(current => current.filter(item => !item.completed))
  }

  const toggleTodo = (todo: Todo) => {
    setTodos(current => current.map(item => ({
      ...item,
      completed: item.id === todo.id
        ? !item.completed
        : item.completed
    })))
  }

  const toggleAllTodos = (completed: boolean) => {
    setTodos(current => current.map(item => ({
      ...item,
      completed
    })))
  }

  const updateTodo = (todo: Todo, newTitle: string) => {
    setTodos(current => current.map(item => ({
      ...item,
      title: item.id === todo.id
        ? newTitle
        : item.title
    })))
  }

  return {
    activeTodosCount,
    addTodo,
    clearTodo,
    clearCompletedTodos,
    completedTodosCount,
    toggleTodo,
    toggleAllTodos,
    todos,
    totalTodosCount,
    updateTodo
  }
}

type StoreType = ReturnType<typeof initTodosStore>

const TodosSymbol = Symbol('todos') as InjectionKey<StoreType>

export const useTodosStore = () => {
  provide(TodosSymbol, initTodosStore())
}

export const useTodos = () => {
  return inject(TodosSymbol) as StoreType
}
