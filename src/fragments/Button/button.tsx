import { forwardRef } from "react" 

export const Button = forwardRef<HTMLButtonElement> ( { props, ref } ) => {

    const { type, onClick, childen, ...rest} = props

    return(
        <>
            <button type={type} onClick={onClick} ref={ref} {...rest}>
                { childen }
            </button>
        </>
    )
}