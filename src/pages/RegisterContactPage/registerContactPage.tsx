import { FormRegisterContact } from "../../components/FormContactRegister/formContactRegister.component"
import { Header } from "../../components/Header/header.component"

export const RegisterContactPage = () => {
    return(
        <>
            <div>

                <Header/>

                <section>

                    <FormRegisterContact/>

                </section>
                
            </div>
        </>
    )
}