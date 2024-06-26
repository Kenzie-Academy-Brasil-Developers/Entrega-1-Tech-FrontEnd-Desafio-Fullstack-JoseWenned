import { Resolver, ResolverResult } from "react-hook-form";
import { ZodEffects, ZodObject, ZodString, ZodTypeAny, z } from "zod"

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

export type TLoginFormValues = z.infer<typeof FormLoginSchema>

export function zodResolver(FormLoginSchema: ZodObject<{ email: ZodEffects<ZodString, string, string>; password: ZodEffects<ZodString, string, string> }, "strip", ZodTypeAny, { email: string; password: string }, { email: string; password: string }>): Resolver<{ email: string; password: string }, any> {
    
    return async (data: TLoginFormValues): Promise<ResolverResult<FormData>> => {
        
      try {
       
        await FormLoginSchema.parseAsync(data);
        
        return {
            values: data,
            errors: {}
        };

      } catch (error: any) {
        
        return {
            values: data,
            errors: {
                [error.path[0]]: error.message,
            }
        };

      }

    };

  }

