import { useRef, useEffect } from "react"

export function usePrevious(value: unknown) {
  const ref = useRef<unknown>(undefined)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
