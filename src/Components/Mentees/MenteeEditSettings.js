import React, { useRef, useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { useHistory } from "react-router-dom";
import { Alert } from '@material-ui/lab';

function MenteeEditProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if(emailRef.current.value.length===0) {
            return setError('Email cannot be empty')
        }

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailRef.current.value)) {
            return setError('You have entered an invalid email address')
        }

        if(passwordRef.current.value.length===0 || 
            passwordConfirmRef.current.value.length===0) {
            return setError('Password cannot be empty')
        }

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        if(passwordRef.current.value.length <= 6) {
            return setError('Password needs to be at least 6 characters')
        }

        const promises = [];

        setLoading(true);
        setError('');

        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if(passwordRef.current.value !== currentUser.password) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(() => {
            history.push('/mentee-profile');
        }).catch(() => {
            setError('Failed to edit profile')
        }).finally(() => {
            setLoading(false);
        })
    }

    return(
        <div className="container">
            <h2 className="text-center mt-5 mb-5"><b>Edit Profile</b></h2>
            <div className="container">
                <form onSubmit={handleSubmit} 
                    style={{display: "grid", 
                            justifyContent: "center"}}>
                    <label><p className="mb-3"><b>Email Address</b></p>
                        <input 
                            className="rounded-md w-100 border border-gray-400 p-3 mb-4"
                            type="email"
                            defaultValue={currentUser.email}
                            ref={emailRef} 
                            required />
                    </label>
                    <label><p className="mb-3"><b>Password</b></p>
                        <input 
                            className="rounded-md w-100 border border-gray-400 p-3 mb-4"
                            type="password" 
                            placeholder="Password"
                            ref={passwordRef}
                            required />
                    </label>
                    <label><p className="mb-3"><b>Password Confirmation</b></p>
                        <input 
                            className="rounded-md w-100 border border-gray-400 p-3 mb-4"
                            type="password" 
                            placeholder="Password"
                            ref={passwordConfirmRef}
                            required />
                    </label>

                    {error && <Alert severity="error" className="mb-4">{error}</Alert>}

                    <button className="btn btn-dark text-warning p-3"
                        disabled={loading}
                        type="submit"
                        style={{ width: "380px", backgroundColor: "#14213D", borderRadius: "10px" }}>
                        <h4><b>Update Profile</b></h4>
                    </button>
                </form>

                <div className="row mt-3 mb-5" style={{justifyContent: 'center'}}>
                    <a 
                        className="navb" 
                        href="/mentee-profile"
                        style={{textDecorationLine: 'underline'}}>{" "}
                        <p style={{fontSize: "16px"}}><b>Go Back</b></p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MenteeEditProfile;