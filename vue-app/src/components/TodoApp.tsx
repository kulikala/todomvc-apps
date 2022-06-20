import { defineComponent } from 'vue'
import { Footer } from '~/components/todoApp/Footer'
import { Header } from '~/components/todoApp/Header'
import { Main } from '~/components/todoApp/Main'
import { useTodosStore } from '~/composables/useTodos'

export const TodoApp = defineComponent(() => {
  useTodosStore()

  return () => (
    <section class="todoapp">
      <Header />
      <Main />
      <Footer />
    </section>
  )
})
