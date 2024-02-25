import { Header } from "../../components/Header/header.component"
import { Button } from "../../fragments/Button/button"

export const ContactsAllPage = () => {
    return(
        <>
            <div>

                <Header/>

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