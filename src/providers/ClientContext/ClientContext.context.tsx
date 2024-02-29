import { createContext, useEffect, useState } from "react"; 
import { IClientContext, IUserProviderProps } from "../../interfaces/client.interfaces";
import { Api } from "../../services/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 
import { TRegisterClients } from "../../schemas/formRegisterClient.schema";
import { TLoginFormValues } from "../../schemas/formLogin.schema";

export const UserContext = createContext({} as IClientContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [ client, setClient ] = useState( null )
    const [ errorMessage, setErrorMessage ] = useState( "" )

    const navigate = useNavigate()

    const createClient = async ( formData: TRegisterClients ) => {

        try{

            const { data } = await Api.post("/clients", formData)

            toast.success("Account successfully registered.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            setClient( data )

            setTimeout(() => {
                navigate( "/" )
            }, 4000)

        }catch( error ){

            toast.error("You hear an error when creating a user.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

        }

    }

    const loadClient = async ( formData: TLoginFormValues ) =>  {

        try{

            const response = await Api.post( "/login", formData )
            const { data } = response

            localStorage.setItem( "@TOKEN", data.token )
            localStorage.setItem( "@CLIENTID", data.client.id)

            setClient( data.client )

            toast.success( "Successfully login.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            } )

            setTimeout(() => {

                if(data.client.isAdmin){
                    navigate( "/ClientAdminPage" )
                }else{
                    navigate( "/PageAllContacts" )
                }
                
            }, 4000)

        }catch( error ){

            setErrorMessage( "Invalid e-mail or password." )
            toast.error("Invalid e-mail or password.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

        }

    }

    const handleLogout = () => {

        localStorage.removeItem( "@TOKEN" )
        localStorage.removeItem( "@CLIENTID" )
        navigate( "/LoginClient" )
        setClient( null )

    }

    return(
        <UserContext.Provider 
            value={{
                client,
                loadClient,
                handleLogout,
                createClient
            }}
        >

            {children}
        </UserContext.Provider>
    )
}