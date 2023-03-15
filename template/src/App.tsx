import React from "react";--legacy-peer-deps
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { AppRoutes } from "./ui/routes";
import axios, { AxiosRequestConfig } from "axios";
import { Provider } from "react-redux";
import Store from "./data/redux/store";
import { Toaster } from "react-hot-toast";


axios.defaults.baseURL = process.env.REACT_APP_API_BASE;

const handleRequestSuccess = (
    request: AxiosRequestConfig
): AxiosRequestConfig => {

    return request;
};
const handleRequestError = (error: any) => {
    console.log(`REQUEST ERROR! => ${error}`);
    return error;
};

axios.interceptors.request.use(handleRequestSuccess, handleRequestError);

function App() {
    return (
        <Provider store={Store.store}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <Toaster />
        </Provider>
    );
}

export default App;
