import { forwardRef, InputHTMLAttributes } from "react"; 
import { FieldError } from "react-hook-form"; 

export const Input = forwardRef<HTMLInputElement>(
    ( { label, error, ...rest }, ref ) => {
        return(
            <>
                <div>

                    {label ? <label htmlFor={rest.name}>{label}</label>: null}

                    <input 
                        id={rest.name}
                        name={rest.name}
                        ref={ref}
                        type="text"
                        {...rest}
                    />

                    {error ? (
                        <p>{error.message}</p>
                    ): null}

                </div>
            </>
        )
    }
)