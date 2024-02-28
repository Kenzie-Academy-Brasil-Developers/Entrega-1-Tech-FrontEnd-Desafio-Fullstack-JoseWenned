import { createContext, useEffect, useState } from "react";
import { IContact, IContactContext, IContactProviderProps } from "../../interfaces/contact.interface";
import { TRegisterContacts } from "../../schemas/formRegisterContact.schema";
import { Api } from "../../services/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext({} as IContactContext)

export const ContactProvider = ( { children }: IContactProviderProps ) => {

    const [ contact, setContact ] = useState(() => [] as IContact[])

    const createContact = async ( formData: TRegisterContacts ) => {

        const token = localStorage.getItem( "@TOKEN" )

        try{

            const { data } = await Api.post( "/contacts", formData, {

                headers: {
                    Authorization: `Bearer ${ token }`
                }

            })

            toast.success("Contact successfully registered.", {

                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
            })

            setContact( [ ...contact, data ] )

            localStorage.setItem( "@SAVEDTECHNOLOGY", JSON.stringify( [ ...contact, data ] ) )

        }catch(error){

            localStorage.removeItem( "@TOKEN" )

        }

    }

    useEffect(() => {

        const readContact = async () => {

            const token = localStorage.getItem( "@TOKEN" )

            try{

                const { data } = await Api.get( "/contacts", {

                    headers: {
                        Authorization: `Bearer ${ token }`
                    }

                } )

                setContact(data.contact)

            }catch( error ){

                return error

            }

        }

        readContact()

    }, [])

    return(

        <ContactContext.Provider 
            value={{

                contact,
                createContact,
                readContact: () => {}

            }}
        >
            { children }
        </ContactContext.Provider>

    )
    
}