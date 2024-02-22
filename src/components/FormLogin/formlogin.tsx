import { Button } from "../../fragments/Button/button"
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

                <Button type="submit">Sing in</Button>
                <Button type="submit">Register</Button>
            </div>
        </>
    )
}