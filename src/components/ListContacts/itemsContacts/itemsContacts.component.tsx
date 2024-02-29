import { Button } from "../../../fragments/Button/button.fragment"

export const ItemComponent = () => {

    return(

        <>
            <ul>
                <div>
                    <img></img>
                </div>

                <li>Full name:</li>
                <li>E-mail:</li>
                <li>Telephone:</li>
                <li>Date register:</li>

                <Button>Trash</Button>
                <Button>Edit</Button>
            </ul>
        </> 

    )

}