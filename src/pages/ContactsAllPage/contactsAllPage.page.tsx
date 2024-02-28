import { useContext } from "react"
import { Header } from "../../components/Header/header.component"
import { Button } from "../../fragments/Button/button.fragment"
import { UserContext } from "../../providers/ClientContext/clientContext.context"

export const ContactsAllPage = () => {

    const { handleLogout } = useContext( UserContext ) 

    return(
        <>
            <div>

                <Header/>

                <Button onClick={ handleLogout } type="submit">Logout</Button>

                <section>

                    <div>

                        <Button type="submit">Back</Button>

                        <Button type="submit">New contact</Button>

                    </div>

                    <div>

                    </div>

                </section>
                
            </div>
        </>
    )
}