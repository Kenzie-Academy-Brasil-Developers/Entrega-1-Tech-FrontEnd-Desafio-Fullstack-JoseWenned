import { FormRegisterClient } from "../../components/FormClientRegister/formClientRegister"
import { Header } from "../../components/Header/header.component"
import { Button } from "../../fragments/Button/button"

export const RegisterClientPage = () => {

    return(

        <>
            <div>

                <Header/>

                <section>

                    <div>

                        <Button type="submit">Back</Button>

                    </div>

                    <FormRegisterClient/>

                </section>
                
            </div>
        </>

    )
    
}