import {
  ref,
  type Ref
} from 'vue'

type SetStateAction<S> = S | ((prevState: S) => S)
type Dispatch<A> = (value: A) => void

function useState <S> (initialState: S | (() => S)): [Ref<S>, Dispatch<SetStateAction<S>>]
function useState <S = undefined> (): [Ref<S | undefined>, Dispatch<SetStateAction<S | undefined>>] {
  const initialState = arguments[0]

  const state = ref<S>(
    typeof initialState === 'function'
      ? (initialState as (() => S))()
      : initialState
  ) as Ref<S | undefined>

  const setState = (value: SetStateAction<S | undefined>) => {
    const current = typeof value === 'function'
      ? (value as ((prevState: S | undefined) => S))(state.value)
      : value

    state.value = current
  }

  return [
    state,
    setState
  ]
}

export {
  useState
}
