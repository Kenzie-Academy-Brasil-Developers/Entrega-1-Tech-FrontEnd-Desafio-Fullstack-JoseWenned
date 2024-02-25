import { forwardRef } from "react"; 
import { IInputProps } from "../../interfaces/fragment.interface";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
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