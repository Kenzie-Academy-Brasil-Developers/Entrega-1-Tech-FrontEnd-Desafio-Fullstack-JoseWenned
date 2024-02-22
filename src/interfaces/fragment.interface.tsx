import { ButtonHTMLAttributes, InputHTMLAttributes } from "react"; 
import { FieldError } from "react-hook-form"; 

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: FieldError
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "submit" | "reset" | "button"
    children: string
}