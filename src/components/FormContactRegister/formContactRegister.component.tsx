import { useContext } from "react"
import { Button } from "../../fragments/Button/button.fragment"
import { Input } from "../../fragments/Input/input.component"
import { ContactContext } from "../../providers/ContactContext/contact.context"
import { TRegisterContacts, formContactRegisterSchema } from "../../schemas/formRegisterContact.schema"
import { zodResolver } from "../../schemas/formLogin.schema"
import { FieldError, useForm } from "react-hook-form"

export const FormRegisterContact = () => {

    const { createContact } = useContext( ContactContext )

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    }= useForm< TRegisterContacts >({
        resolver: zodResolver( formContactRegisterSchema as any ) as any
    })

    const submit = async ( formData: TRegisterContacts ) => {
        createContact( formData )
        reset()
    }

    return(

        <>

            <form onSubmit={ handleSubmit( submit ) }>

                <h2>Register new contact</h2>

                <Input 
                    label="Complete name"
                    type="name"
                    placeholder="Enter your full name"
                    { ...register( "full_name" ) }
                    error={ errors.full_name as FieldError | undefined }
                />

                <Input 
                    label="E-mail"
                    type="email"
                    placeholder="Enter your e-mail"
                    { ...register( "email" ) }
                    error={ errors.email as FieldError | undefined }
                />
                
                <Input 
                    label="Telephone"
                    type="string"
                    placeholder="(--)- ---- ----"
                    { ...register( "telephone" ) }
                    error={ errors.telephone as FieldError | undefined }
                />

                <Input 
                    label="Registration date"
                    type="string"
                    placeholder="--/--/----"
                    { ...register( "date_register" ) }
                    
                    error={ errors.date_register as FieldError | undefined }
                />

                <Button type="submit">Register contact</Button>

            </form>
        </>

    )
}