import axios, {AxiosResponse} from "axios";
import toast from "react-hot-toast";
import {useEffect} from "react";


export function useAppViewModel() {
    function handleResponseSuccess(requestResponse: AxiosResponse):AxiosResponse{
        return  requestResponse;
    }


    const handleResponseError = (error:{response: { status: number}}) => {
        switch (error?.response?.status) {
            /* case 400:
              toast.error(error.response.data.message);
              break; */
            case 401:

                break;
            case 500:
                toast.error("Se ha producido un error inesperado, por favor vuelve a intentarlo");
                break;
            default:
                console.log({ error });
        }
        throw error;
    };

    useEffect(() => {
        axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
    }, []);
}
