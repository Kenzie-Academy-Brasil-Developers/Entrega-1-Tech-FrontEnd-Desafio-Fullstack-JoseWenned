import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/loginPage"
import { RegisterClientPage } from "../pages/RegisterClientPage/registerClientPage"
import { RegisterContactPage } from "../pages/RegisterContactPage/registerContactPage"
import { ClientAdminPage } from "../pages/ClientAdminPage/clientAdminPage"
import { ContactsAllPage } from "../pages/ContactsAllPage/contactsAllPage"

export const RouterMain = () => {
    return(

        <Routes>

            <Route path="/loginPage" element={ <LoginPage/> }></Route>
            <Route path="/registerClientPage" element={ <RegisterClientPage/> }></Route>
            <Route path="/registerContactPage" element={ <RegisterContactPage/> }></Route>
            <Route path="/clientAdminPage" element={ <ClientAdminPage/> }></Route>
            <Route path="/pageAllContacts" element={ <ContactsAllPage/> }></Route>

        </Routes>

    )
}