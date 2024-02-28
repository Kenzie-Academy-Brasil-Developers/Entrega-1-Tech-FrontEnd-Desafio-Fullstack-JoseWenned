import React from "react";
import { TLoginFormValues } from "../schemas/formLogin.schema";
import { TRegisterClients } from "../schemas/formRegisterClient.schema";

export interface IClient {

    id: number
    name: string
    email: string
    password: string
    typeAccount: string
    telephone: string
    data_register: string

}

export interface IUserProviderProps {

    children: React.ReactNode

}

export interface IClientContext {

    client: IClient | null
    loadClient: ( formData: TLoginFormValues ) => Promise<void>
    handleLogout: () => void
    createClient: ( formData: TRegisterClients ) => Promise<void>
    
}