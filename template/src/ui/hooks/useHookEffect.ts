import { useEffect } from 'react'

interface AsyncFunction {
  asyncFunction: <T>() => Promise<T>
  successFunction: <T>(arg0?: T) => void
  errorFunction: <T>(e?: T) => void
  returnFunction?: () => void
  dependencies: unknown[]
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAsyncEffect ({ asyncFunction, successFunction, errorFunction, dependencies = [], returnFunction }: AsyncFunction) {
  useEffect(() => {
    let isActive = true
    asyncFunction().then(result => {
      if (isActive) {
        successFunction(result)
      }
    }).catch(e => {
      errorFunction(e)
    })
    return () => {
      if (returnFunction != null) {
        returnFunction()
      }

      isActive = false
    }
  }, dependencies)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useCustomEffect (effect: () => void, dependencies: any[], returnFunction?: () => void) {
  useEffect(() => {
    let isActive = true
    if (isActive) {
      effect()
    }

    return () => {
      if (returnFunction != null) {
        returnFunction()
      }
      isActive = false
    }
  }, dependencies)
}
