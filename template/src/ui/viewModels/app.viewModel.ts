import { useEffect } from 'react'
import axios, { type AxiosResponse, type AxiosError } from 'axios'
import toast from 'react-hot-toast'

export function useAppViewModel (): void {
  function handleResponseSuccess (requestResponse: AxiosResponse): AxiosResponse {
    return requestResponse
  }

  function handleResponseError (error: AxiosError): void {
    switch (error?.response?.status) {
      /* case 400:
        toast.error(error.response.data.message);
        break; */
      case 401:
        break
      case 500:
        toast.error('Se ha producido un error inesperado, por favor vuelve a intentarlo')
        break
      default:
        console.log({ error })
    }
    throw error
  }

  useEffect(() => {
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError)
  }, [])
}
