import { Button } from "../../fragments/Button/button.fragment"
import { Input } from "../../fragments/Input/input.component"

export const FormLogin = () => {
    return(
        <>
            <div>
                
                <form>

                    <h2>Log in</h2>

                    <Input 
                        label="E-mail"
                        type="email"
                        placeholder="Enter your e-mail"
                    />

                    <Input 
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                    />

                    <Button type="submit">Sing in</Button>
                    <Button type="submit">Register</Button>

                </form>

            </div>
        </>
    )
}