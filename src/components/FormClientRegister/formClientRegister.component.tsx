import { useContext } from "react"
import { Button } from "../../fragments/Button/button.fragment"
import { Input } from "../../fragments/Input/input.component"
import { UserContext } from "../../providers/ClientContext/clientContext.context"
import { FieldError, useForm } from "react-hook-form"
import { zodResolver } from "../../schemas/formLogin.schema"
import { FormClientRegisterSchema, TRegisterClients } from "../../schemas/formRegisterClient.schema"
import { Select } from "../../fragments/Select/select.fragment"

export const FormRegisterClient = () => {

    const { createClient } = useContext( UserContext )

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    }= useForm<TRegisterClients>({
        resolver: zodResolver(FormClientRegisterSchema as any) as any
    })

    const submit = async ( formData: TRegisterClients ) => {
        createClient( formData )
        reset()
    }
    
    return(
        <>
            <div>
                
                <form onSubmit={ handleSubmit( submit ) }>

                    <h2>Register</h2>

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
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        { ...register( "password" ) }
                        error={ errors.password as FieldError | undefined }
                    />

                    <Input 
                        label="Confirm password"
                        type="string"
                        placeholder="Confirm your password"
                        { ...register( "confirmPassword" ) }
                        error={ errors.confirmPassword as FieldError | undefined }
                    />

                    <Select
                        label= "Type account"
                        itemType="boolean"
                        { ...register( "typeAccount" ) }
                        error={ errors.typeAccount as FieldError | undefined }
                    >
                        <option value={ "" }>Select type account</option>
                        <option value={ "accountAdmin" }>Account admin</option>
                        <option value={ "accountNormal" }>Account normal</option>
                    </Select>
                
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

                    <Button type="submit">Register</Button>

                </form>

            </div>
        </>
    )
}