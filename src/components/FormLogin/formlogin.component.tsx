import { Button } from "../../fragments/Button/button.fragment"
import { Input } from "../../fragments/Input/input.component"
import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/ClientContext/ClientContext.context"
import { useNavigate } from "react-router-dom"
import { FormLoginSchema } from "../../schemas/formLogin.schema"
import { useForm } from "react-hook-form"
import { ZodObject, ZodEffects, ZodString, ZodTypeAny } from "zod"

export const FormLogin = () => {

    const { loadClient } = useContext( UserContext )

    const navigate = useNavigate()

    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors } } = useForm({
            resolver: ZodResolver( FormLoginSchema )
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

    const submit = ( formData: any ) => {
        loadClient( formData )
        reset()
    }


    return(
        <>
            <div>
                
                <form onSubmit={ handleSubmit( submit ) } noValidate>

                    <h2>Log in</h2>

                    <Input 
                        register={undefined} label="E-mail"
                        type="email"
                        placeholder="Enter your e-mail"
                        {...register("email")}
                        error={errors.password}                    
                    />
                    

                    <Input 
                        register={undefined} label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password")}
                        error={errors.password}                    
                    />

                    <Button type="submit">Sing in</Button>
                    <Button type="submit">Register</Button>

                </form>

            </div>
        </>
    )
}

function ZodResolver(FormLoginSchema: ZodObject<{ email: ZodEffects<ZodString, string, string>; password: ZodEffects<ZodString, string, string> }, "strip", ZodTypeAny, { email: string; password: string }, { email: string; password: string }>): import("react-hook-form").Resolver<import("react-hook-form").FieldValues, any> | undefined {
    throw new Error("Function not implemented.")
}

