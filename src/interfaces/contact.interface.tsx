import React from "react";

export interface IContact {

    id: number
    name: string
    email: string
    telephone: string
    data_register: string

}

export interface IContactContext {

    contact: IContact | null

}

export interface IContactProviderProps {

    children: React.ReactNode

}
