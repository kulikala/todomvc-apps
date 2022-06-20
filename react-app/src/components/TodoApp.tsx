import { Footer } from '~/components/todoApp/Footer'
import { Header } from '~/components/todoApp/Header'
import { Main } from '~/components/todoApp/Main'
import { TodosStore } from '~/hooks/useTodos'

export const TodoApp = () => {
  return (
    <TodosStore>
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    </TodosStore>
  )
}
