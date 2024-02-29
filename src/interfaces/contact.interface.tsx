import React from "react";
import { TRegisterContacts } from "../schemas/formRegisterContact.schema";

export interface IContact {

    id: number
    full_name: string
    email: string
    telephone: string
    data_register: string

}

export interface IContactContext {

    contact: IContact[]
    createContact: ( formData: TRegisterContacts ) => Promise<void>
    readContact: () => void

}

export interface IContactProviderProps {

    children: React.ReactNode

}
