import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            if (Auth.isAuthenticated() === true) {
                return <Component {...props} />
            } else {
                return (
                    <Redirect to="/"></Redirect>
                );
            }
        }} >
        </Route>
    );

};