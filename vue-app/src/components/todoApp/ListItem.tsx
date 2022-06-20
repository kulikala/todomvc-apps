import {
  defineComponent,
  ref,
  watchPostEffect,
  type PropType
} from 'vue'
import { useState } from '~/composables/useState'
import {
  useTodos,
  type Todo
} from '~/composables/useTodos'

export const ListItem = defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },

  setup (props) {
    const textRef = ref<HTMLInputElement>()
    const [editing, setEditing] = useState(false)
    const {
      clearTodo,
      toggleTodo,
      updateTodo
    } = useTodos()

    watchPostEffect(() => {
      const current = textRef.value

      if (editing.value && current) {
        current.focus()
      }
    })

    const handleDestroy = () => clearTodo(props.todo)

    const handleEdit = () => {
      const current = textRef.value

      if (current) {
        current.value = props.todo.title
      }

      setEditing(true)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return
      }

      event.preventDefault()

      const current = textRef.value

      if (current?.value) {
        setEditing(false)
        updateTodo(props.todo, current.value)
      }
    }

    const handleSubmit = () => {
      setEditing(false)

      const current = textRef.value?.value
      if (current && current !== props.todo.title) {
        updateTodo(props.todo, current)
      }
    }

    const handleToggle = () => toggleTodo(props.todo)

    return () => (
      <li class={{
        completed: props.todo.completed,
        editing: editing.value
      }}>
        <div class="view">
          <input
            checked={props.todo.completed}
            class="toggle"
            onChange={handleToggle}
            type="checkbox"
          />
          <label onClick={handleEdit}>
            {props.todo.title}
          </label>
          <button
            class="destroy"
            onClick={handleDestroy}
          />
        </div>
        <input
          class="edit"
          onBlur={handleSubmit}
          onKeydown={handleKeyDown}
          ref={textRef}
        />
      </li>
    )
  }
})
