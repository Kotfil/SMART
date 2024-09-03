import {UserInterface} from "./users.interface";

export interface UserActionInterface {
    type: string
    payload: Payload
    meta: Meta
    error?: AxiosError | null
}

export interface Payload {
    data: UserInterface[]
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
}

export interface Headers {
    "cache-control": string
    "content-type": string
    expires: string
    pragma: string
}

export interface Config {
    transitional: Transitional
    adapter: string[]
    transformRequest: any[]
    transformResponse: any[]
    timeout: number
    xsrfCookieName: string
    xsrfHeaderName: string
    maxContentLength: number
    maxBodyLength: number
    env: Env
    headers: Headers2
    baseURL: string
    withCredentials: boolean
    method: string
    url: string
}

export interface Transitional {
    silentJSONParsing: boolean
    forcedJSONParsing: boolean
    clarifyTimeoutError: boolean
}

export interface Env {
}

export interface Headers2 {
    Accept: string
    "Content-Type": string
}

export interface Request {
}

export interface Meta {
    requestId: string
    requestStatus: string
}

export interface AxiosError {
    name: string
    message: string
    stack: string
    code: string
}