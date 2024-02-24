import { createContext, useEffect, useState } from "react"; 
import { IUserContext, IUserProviderProps } from "../../interfaces/interfaces";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    return(
        <UserContext.Provider 
            value={{
                
            }}
        >

            {children}
        </UserContext.Provider>
    )
}