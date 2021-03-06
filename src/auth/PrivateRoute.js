import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "./Auth"

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser, isLoading} = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={(routeProps) => {
                return (
                    isLoading || !!currentUser ? (
                        <RouteComponent {...routeProps} />
                    ) : (
                        <Redirect to={{pathname: "/login", state: {from: routeProps.location}}} />
                    )
                )
            }
            }
        />
    )
}

export default PrivateRoute