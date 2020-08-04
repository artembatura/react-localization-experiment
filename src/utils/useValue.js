export function useValue(initialValue = null) {
  return [() => initialValue, newValue => (initialValue = newValue)];
}
