import { Button } from "../../fragments/Button/button"
import { Input } from "../../fragments/Input/input"

export const FormRegister = () => {
    return(
        <>
            <div>
                
                <form>

                    <h2>Register</h2>

                    <Input 
                        label="Complete name"
                        type="name"
                        placeholder="Enter your full name"
                    />

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

                    <label htmlFor="accountType">Select account type:</label>
                    <select id="accountType" name="Account type">
                        <option value={"clientAdmin"}>Client admin</option>
                        <option value={"clientNormal"}>Client normal</option>
                    </select>
                
                    <Input 
                        label="Telephone"
                        type="string"
                        placeholder="(--)- ---- ----"
                    />

                    <Input 
                        label="Registration date"
                        type="string"
                        placeholder="--/--/----"
                    />

                    <Button type="submit">Register</Button>

                </form>

            </div>
        </>
    )
}