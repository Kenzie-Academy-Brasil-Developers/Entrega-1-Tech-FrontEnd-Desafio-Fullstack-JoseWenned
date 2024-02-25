import { forwardRef } from "react" 
import { IButtonProps } from "../../interfaces/fragment.interface"

export const Button = forwardRef<HTMLButtonElement, IButtonProps> ((props, ref) => {

    const { type, onClick, children, ...rest} = props

    return(

        <>
            <button type={type} onClick={onClick} ref={ref} {...rest}>
                { children }
            </button>
        </>
        
    )

})