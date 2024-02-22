import { forwardRef } from "react"; 
import { IInputProps } from "../../interfaces/fragment.interface";

export const select = forwardRef<HTMLSelectElement>(
    ( { label, error, ...rest, children }, ref ) => {
        return(
            <>
                <div>

                    {label ? <label htmlFor={rest.name}>{label}</label>: null}

                    <select 
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