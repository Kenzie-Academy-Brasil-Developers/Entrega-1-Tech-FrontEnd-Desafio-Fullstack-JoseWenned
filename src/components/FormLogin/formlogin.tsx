import { Input } from "../../fragments/Input/input"

export const FormLogin = () => {
    return(
        <>
            <div>
                <h2>Log in</h2>

                <Input 
                    type="email"
                    placeholder="Enter your e-mail"
                />

                <Input 
                    type="password"
                    placeholder="Enter your password"
                />

                <button type="submit">Sing in</button>
                <button type="submit">Register</button>
            </div>
        </>
    )
}