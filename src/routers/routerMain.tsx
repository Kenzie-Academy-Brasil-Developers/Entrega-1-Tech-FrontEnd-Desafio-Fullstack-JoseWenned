import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/loginPage.page"
import { RegisterClientPage } from "../pages/RegisterClientPage/registerClientPage.page"
import { RegisterContactPage } from "../pages/RegisterContactPage/registerContactPage.page"
import { ClientAdminPage } from "../pages/ClientAdminPage/clientAdminPage.page"
import { ContactsAllPage } from "../pages/ContactsAllPage/contactsAllPage.page"

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