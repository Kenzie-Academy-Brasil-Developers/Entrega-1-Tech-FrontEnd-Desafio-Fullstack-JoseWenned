import { SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: FieldError;
}