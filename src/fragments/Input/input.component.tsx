import React, { forwardRef } from "react"; 
import { IInputProps } from "../../interfaces/fragment.interface";
import { InputProps } from "../../interfaces/input.interface";

export const Input:React.FC<InputProps> = ( { label, error, type, register }, ref ) => {

    return(
        <>
            <div>

                <label>{label}</label>

                <input
                    {...register}
                    ref={ref}
                    type= {type}
                />

                {error ? (
                    <p>{error.message}</p>
                ): null}

            </div>
        </>
    )
}
