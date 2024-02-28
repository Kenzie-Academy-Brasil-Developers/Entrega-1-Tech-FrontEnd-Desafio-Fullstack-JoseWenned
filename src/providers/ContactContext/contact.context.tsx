import { createContext } from "react";
import { IContactContext, IContactProviderProps } from "../../interfaces/contact.interface";

export const ContactContext = createContext({} as IContactContext)

export const ContactProvider = ( { children }: IContactProviderProps ) => {

    return(

        <ContactContext.Provider value={{

        }}>
            { children }
        </ContactContext.Provider>

    )
    
}