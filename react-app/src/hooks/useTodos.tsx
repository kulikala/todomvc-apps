import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren
} from 'react'
import { v4 as uuid } from 'uuid'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

const initTodosStore = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const totalTodosCount = todos.length

  const completedTodosCount = todos.filter(todo => todo.completed).length

  const activeTodosCount = totalTodosCount - completedTodosCount

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

const TodosContext = createContext<StoreType>(null as any)

export const TodosStore: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <TodosContext.Provider value={initTodosStore()}>
      {children}
    </TodosContext.Provider>
  )
}

export const useTodos = () => {
  return useContext(TodosContext)
}
