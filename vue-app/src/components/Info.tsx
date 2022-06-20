import { defineComponent } from 'vue'

export const Info = defineComponent(() => {
  return () => (
    <footer class="info">
      <p>Click to edit a todo</p>
      <p>Implemented by <a href="https://github.com/kulikala">Kazuyuki Namba</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  )
})
