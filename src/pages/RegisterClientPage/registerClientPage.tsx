import { FormRegisterClient } from "../../components/FormClientRegister/formClientRegister"
import { Header } from "../../components/Header/header.component"

export const RegisterClientPage = () => {

    return(

        <>
            <div>

                <Header/>

                <section>

                    <FormRegisterClient/>

                </section>
                
            </div>
        </>

    )
    
}