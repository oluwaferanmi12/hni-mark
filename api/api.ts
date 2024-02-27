import axios from "axios";
import { toast } from "sonner";

const apiInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

apiInstance.interceptors.request.use(function (config) {
    // const bearer = "";
    // config.headers.Authorization = bearer ? bearer : "";
    config.headers["Content-Type"] = 'application/json-patch+json'
    return config
}, function (error) {
    return Promise.reject(error)
});

apiInstance.interceptors.response.use(function (response) {
    //CHeck the format and see what to do with the response sent;
    return response;
}, function (error) {
    const errorVal = error?.response?.data?.message
    toast.error(errorVal ?? "Oops! An error Occured")
    return Promise.reject(error)
});

export const apiCall = async (url: string, method: 'get' | "post" | 'delete' | 'put', body: any) => {
    if (method === "post") {
        console.log("Got into post hereee")
        return await apiInstance.post(url, body)
    }
    else if (method === "get") {
        return await apiInstance.get(url)
    }
    else if (method === "put") {
        return await apiInstance.put(url)
    }
    else if (method === "delete") {
        return await apiInstance.delete(url)
    }
}

