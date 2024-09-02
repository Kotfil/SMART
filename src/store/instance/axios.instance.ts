import axios from 'axios';
import {REACT_APP_API_URL} from "../../components/helpers/api";

export const axiosInstance = axios.create({
    baseURL: REACT_APP_API_URL,
    withCredentials:true,
    headers: {
        'Content-Type': 'application/json',
    },
});

