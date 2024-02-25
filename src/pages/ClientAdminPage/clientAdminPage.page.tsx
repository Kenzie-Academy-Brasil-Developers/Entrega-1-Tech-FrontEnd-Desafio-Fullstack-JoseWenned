import { Header } from "../../components/Header/header.component"
import { Button } from "../../fragments/Button/button.fragment"
import { Input } from "../../fragments/Input/input.component"

export const ClientAdminPage = () => {
    return(
        <>
            <div>

                <Header/>

                <section>

                    <div>

                        <Button type="submit">Back</Button>

                        <Input
                            type="name"
                            placeholder="Search clients"
                        />

                    </div>

                    <div>

                    </div>

                </section>
                
            </div>
        </>
    )
}