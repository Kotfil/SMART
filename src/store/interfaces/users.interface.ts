import axios from "axios";

export interface UsersInterface {
    users: Array<UserInterface> | []
    loading: boolean
    error: null | axios.AxiosError

}

interface UserInterface {
    user: any
}