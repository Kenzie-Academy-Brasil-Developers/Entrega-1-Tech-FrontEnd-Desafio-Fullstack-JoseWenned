import { createContext, useState } from "react"; 
import { IClientContext, IUserProviderProps } from "../../interfaces/interfaces";
import { Api } from "../../services/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 

export const UserContext = createContext({} as IClientContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [ client, setClient ] = useState( null )
    const [ errorMessage, setErrorMessage ] = useState( "" )

    const navigate = useNavigate()

    const loadClient = async ( formData: {} ) =>  {

        try{

            const response = await Api.post( "/clients", formData )
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
                navigate( "/PageAllContacts" )
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
                handleLogout
            }}
        >

            {children}
        </UserContext.Provider>
    )
}