import { useNavigate, useLocation, useParams } from 'react-router-dom'
import queryString from 'query-string'

interface IUseNavigation {
  navigateTo: (url: string, state?: Record<string, any>) => void
  replaceAndNavigateTo: (url: string) => void
  goBack: () => void
  getState: () => string
  getStateParam: (param: string) => string
  getQueryParam: (param: string) => string
  getCurrentPathName: () => string
  getHash: () => string
  getPathParam: (param: string) => string
}
export function useNavigation (): IUseNavigation {
  const navigate = useNavigate()
  const currentPath = useParams()
  const location = useLocation()

  function navigateTo (url: string, state?: Record<string, any>): void {
    navigate(url, { state })
  }
  function replaceAndNavigateTo (url: string): void {
    navigate(url, { replace: true })
  }

  function goBack (): void {
    navigate(-1)
  }

  function getState (): string {
    return location.state
  }

  function getStateParam (param: string): string {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!location.state) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      return !location.state[param] ? location.state[param] : ''
    }
    return ''
  }

  function getQueryParam (param: string): string {
    const parsedParams = queryString.parse(location.search)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (parsedParams[param]) {
      return parsedParams[param] as string
    }
    return ''
  }

  function getCurrentPathName (): string {
    return location.pathname
  }

  function getHash (): string {
    return location.hash
  }

  function getPathParam (param: string): string {
    return currentPath[param] as string
  }

  return {
    navigateTo,
    replaceAndNavigateTo,
    goBack,
    getState,
    getStateParam,
    getQueryParam,
    getCurrentPathName,
    getHash,
    getPathParam
  }
}
