import { Link, useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { useAuth } from '../../context/AuthContext'; 
import React, { useState } from "react";

function MenteeProfile() {
    const [error, setError] = useState('')
    const { signout } = useAuth()
    const history = useHistory()

    async function handleSignOut() {
        setError('')

        try {
            await signout()
            history.push('/sign-in')
        } catch {
            setError('Failed to log out')
        }
    }

    return(
        <div>
            <Link to="/mentee-edit-profile" className="btn btn-dark text-warning rounded p-3">
                <h4><b>Edit Profile</b></h4>
            </Link>

            {error && <Alert severity="error" className="mb-4">{error}</Alert>}
                    
            <button className="btn btn-dark text-warning rounded p-3"
                type="submit"
                onClick={handleSignOut}
                style={{ width: "380px" }}>
                <h4><b>Log out</b></h4>
            </button>
        </div>
    )
}

export default MenteeProfile;