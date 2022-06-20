import { defineComponent } from 'vue'
import { Info } from '~/components/Info'
import { TodoApp } from '~/components/TodoApp'

export const App = defineComponent(() => {
  return () => (
    <>
      <TodoApp />
      <Info />
    </>
  )
})
