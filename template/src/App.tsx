import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './ui/routes'
import axios, { type AxiosRequestConfig, type AxiosError } from 'axios'
import { Provider } from 'react-redux'
import Store from './data/redux/store'
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE

const handleRequestSuccess = (
  request: AxiosRequestConfig
): AxiosRequestConfig => {
  return request
}

function handleRequestError (error: AxiosError): AxiosError {
  return error
}

axios.interceptors.request.use(handleRequestSuccess, handleRequestError)

function App (): JSX.Element {
  return (
    <Provider store={Store.store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster />
    </Provider>
  )
}

export default App
