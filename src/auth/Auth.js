import React, { useEffect, useState } from "react"
import { app } from "../firebase/config"

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        try {
            setIsLoading(true)
            app.auth().onAuthStateChanged(setCurrentUser)
        } catch (e) {
            alert(e)
        } finally {
            setIsLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}