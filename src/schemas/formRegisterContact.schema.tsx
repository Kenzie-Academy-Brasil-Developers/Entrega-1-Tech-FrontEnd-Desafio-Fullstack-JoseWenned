import { z } from "zod"

export const formContactRegisterSchema = z.object({

    full_name: z.string()
    .min(3, "The full name must have at least three characters.")
    .refine(( full_name ) => full_name.length === 0, {
        message: "Name is required."
    }),
    email: z.string().email( { message: "Invalid e-mail address." } ).refine(( email ) => email.length === 0, {
        message: "E-mail is required."
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

export type TRegisterContacts = z.infer< typeof  formContactRegisterSchema >