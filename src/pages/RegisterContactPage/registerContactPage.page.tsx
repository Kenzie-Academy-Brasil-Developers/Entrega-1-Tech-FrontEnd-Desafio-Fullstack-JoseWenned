import { FormRegisterContact } from "../../components/FormContactRegister/formContactRegister.component"
import { Header } from "../../components/Header/header.component"
import { Button } from "../../fragments/Button/button.fragment"

export const RegisterContactPage = () => {
    return(
        <>
            <div>

                <Header/>

                <section>

                    <div>

                        <Button type="submit">Back</Button>

                    </div>

                    <FormRegisterContact/>

                </section>
                
            </div>
        </>
    )
}