export function capitalize <S extends string> (str: S) {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<S>
}
