import { FormLogin } from "../../components/FormLogin/formlogin.component"

export const LoginPage = () => {
    return(
        <>
            <div>

                <section>

                    <h1>Welcome</h1>
                    <p>to the full stack</p>
                    <p>tech challenge</p>
                    
                </section>

                <section>

                    <FormLogin/>

                </section>
                
            </div>
        </>
    )
}