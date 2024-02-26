import { useContext } from "react"
import { Header } from "../../components/Header/header.component"
import { Button } from "../../fragments/Button/button.fragment"
import { Input } from "../../fragments/Input/input.component"
import { UserContext } from "../../providers/ClientContext/ClientContext.context"

export const ClientAdminPage = () => {

    const { handleLogout } = useContext( UserContext )

    return(
        <>
            <div>

                <Header/>

                <Button onClick={ handleLogout } type="submit">Logout</Button>

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