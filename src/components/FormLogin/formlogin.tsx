export const FormLogin = () => {
    return(
        <>
            <div>
                <h2>Log in</h2>

                <label>E-mail</label>
                <input type="email" placeholder="Enter your e-mail." required/>

                <label>Password</label>
                <input type="email" placeholder="Enter your password." required/>

                <button type="submit">Sing in</button>
                <button type="submit">Register</button>
            </div>
        </>
    )
}