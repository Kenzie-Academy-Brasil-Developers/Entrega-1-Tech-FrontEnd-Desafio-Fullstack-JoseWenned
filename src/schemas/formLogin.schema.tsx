import { z } from "zod"

export const FormLoginSchema = z.object({
    
    email: z.string().email( { message: "Invalid e-mail address." } ).refine(( email ) => email.length === 0, {
        message: "E-mail is required."
    }),
    password:
    z.string()
    .min(8, "The password must have at least eight characters")
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
        "The password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
    )
    .refine(( password ) => password.length === 0, {
        message: "Password is required."
    })

})