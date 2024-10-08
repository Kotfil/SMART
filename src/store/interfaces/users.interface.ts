import {SerializedError} from "@reduxjs/toolkit";

export interface UsersInterface {
    users: Array<UserInterface> | []
    loading: boolean
    error:  null | SerializedError

}
interface ApiResponse<T> {
    data: T;
}

export type GetUsersResponse = ApiResponse<UserInterface[]>;


export interface UserInterface {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}
