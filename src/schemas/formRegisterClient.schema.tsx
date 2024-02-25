import { z } from "zod"

export const formClientRegisterSchema = z.object({
    full_name: z.string()
    .min(3, "The full name must have at least three characters.")
    .refine(( full_name ) => full_name.length === 0, {
        message: "Name is required."
    }),
    email: z.string().email( { message: "Invalid e-mail address." } ).refine(( email ) => email.length === 0, {
        message: "E-mail is required."
    }),
    password:
    z.string()
    .min(8, "The password must have at least eight characters.")
    .regex(/(?=.*[a-z])/, " Need is a letter lowercase. ")                                            
    .regex(/(?=.*[A-Z])/, " Need is a letter uppercase. ")
    .regex(/(?=.*[!@#$%^&*])/, " Need is a letter special character. ")
    .regex(/(?=.*?[0-9])/, "Need a number")
    .refine(( password ) => password.length === 0, {
        message: "Password is required."
    }),
    confirmPassword: z.string().refine((confirmPassword) => confirmPassword.length === 0, {
        message: "Confirm password is required."
    }),
    admin: z.boolean().refine((admin) => admin === null, {
        message: "Admin is required."
    }),
    telephone: z.string()
    .max(15, "Telephone number must have a maximum of fifteen characters.")
    .refine((telephone) => telephone.length === 0, {
        message: "Telephone is required."
    }),
    date_register: z.string()
    .refine((telephone) => telephone.length === 0, {
        message: "Date register is required."
    }),
})