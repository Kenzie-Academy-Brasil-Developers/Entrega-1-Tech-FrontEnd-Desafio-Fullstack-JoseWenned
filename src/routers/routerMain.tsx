import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/loginPage"
import { RegisterClientPage } from "../pages/RegisterClientPage/registerClientPage"
import { RegisterContactPage } from "../pages/RegisterContactPage/registerContactPage"
import { ClientAdminPage } from "../pages/ClientAdminPage/clientAdminPage"
import { ContactsAllPage } from "../pages/ContactsAllPage/contactsAllPage"

export const RouterMain = () => {
    return(

        <Routes>

            <Route path="/" element={ <LoginPage/> }></Route>
            <Route path="/RegisterClientPage" element={ <RegisterClientPage/> }></Route>
            <Route path="/RegisterContactPage" element={ <RegisterContactPage/> }></Route>
            <Route path="/ClientAdminPage" element={ <ClientAdminPage/> }></Route>
            <Route path="/PageAllContacts" element={ <ContactsAllPage/> }></Route>

        </Routes>

    )
}