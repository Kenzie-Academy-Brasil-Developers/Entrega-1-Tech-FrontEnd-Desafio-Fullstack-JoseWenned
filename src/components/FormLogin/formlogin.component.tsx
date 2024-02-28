import { Button } from "../../fragments/Button/button.fragment"
import { Input } from "../../fragments/Input/input.component"
import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/ClientContext/clientContext.context"
import { useNavigate } from "react-router-dom"
import { FormLoginSchema, TLoginFormValues, zodResolver } from "../../schemas/formLogin.schema"
import { FieldError, useForm } from "react-hook-form"

export const FormLogin = () => {

    const { loadClient } = useContext( UserContext )

    const navigate = useNavigate()

    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors }, 
        } = useForm<TLoginFormValues>({
            resolver: zodResolver( FormLoginSchema )
        })

    useEffect(() => {

        const token = localStorage.getItem( "@TOKEN" )
        const clientId = localStorage.getItem( "@CLIENTID" )

        if( token && clientId ){
            const isValidToken = validateToken()

            if( isValidToken ){
                navigate( "/PageAllContacts" )
            }
        }else {

            localStorage.removeItem( "@TOKEN" )
            localStorage.removeItem( "@CLIENTID" )

        }

    }, [])

    const validateToken = () => {
        
        const expirationTimeStr = localStorage.getItem( "@TOKEN_EXPIRATION" )

        if( !expirationTimeStr ) {

            return false

        }

        const expirationTime = parseInt( expirationTimeStr, 10 )

        if( isNaN( expirationTime ) ){

            return false

        }

        const currentTime = new Date().getTime()

        return expirationTime > currentTime

    }

    const submit = async ( formData: TLoginFormValues ) => {
        loadClient( formData )
        reset()
    }


    return(
        <>
            <div>
                
                <form onSubmit={ handleSubmit( submit ) } noValidate>

                    <h2>Log in</h2>

                    <Input
                        type="email"
                        placeholder="E-mail"
                        {...register("email")}
                        error={ errors.email as FieldError | undefined }
                    />
                    
                    <Input

                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                        error={ errors.password as FieldError | undefined } 
                    />

                    <Button type="submit">Sing in</Button>
                    <Button type="submit">Register</Button>

                </form>

            </div>
        </>
    )
}



