import React from "react";

export interface IClient {
    id: number
    name: string
    email: string
    password: string
    admin: boolean
    data_register: string
}

export interface IUserProviderProps {
    children: React.ReactNode
}

export interface IUserContext {
    client: IClient | null
}