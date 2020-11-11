import { app } from "./firebase/config"
import React, { useCallback, useContext } from "react"
import { withRouter, Redirect } from "react-router"
// import app from "./base.js"
import { AuthContext } from "./Auth"
import "./Login.css"

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                alert(error)
            }
        },
        [history]
    )

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <div className="login-container">
        <div>
            <div className="login-section">
                <div>
                    <h1>Log in to Your Eye</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div>
                    <label>
                        <p>Email address</p>
                        <input className="login-input" name="email" type="email" placeholder="Email address" />
                    </label>
                    </div>
                    <div>
                    <label>
                        <p>Password</p>
                        <input  className="login-input" name="password" type="password" placeholder="Password" />
                    </label>
                    </div>
                    <div>
                        <button className="login-button" type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Login)