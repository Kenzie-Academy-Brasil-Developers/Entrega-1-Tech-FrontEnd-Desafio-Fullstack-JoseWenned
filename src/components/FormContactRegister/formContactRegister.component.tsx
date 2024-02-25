import { Button } from "../../fragments/Button/button.fragment"
import { Input } from "../../fragments/Input/input.component"

export const FormRegisterContact = () => {
    return(
        <>
            <div>
                
                <form>

                    <h2>Register new contact</h2>

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
                        label="Telephone"
                        type="string"
                        placeholder="(--)- ---- ----"
                    />

                    <Input 
                        label="Registration date"
                        type="string"
                        placeholder="--/--/----"
                    />

                    <Button type="submit">Register contact</Button>

                </form>

            </div>
        </>
    )
}