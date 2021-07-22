import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => (
                //if recently signed up, then redirect to /apply
                //else, redirect to /
                !currentUser ? <Component {...props}/> : <Redirect to="/"/>
            )}
        />
    )
}