import { createContext, useEffect, useState } from "react"; 

export const UserContext = createContext({})

export const UserProvider = ({ children }: IUserProviderProps) => {
    return(
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}