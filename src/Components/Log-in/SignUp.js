import React, { useRef, useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import Header from "../../Components/Header";

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(emailRef.current.value.length==0) {
            return setError('Email cannot be empty')
        }

        if(passwordRef.current.value.length==0 || 
            passwordConfirmRef.current.value.length==0) {
            return setError('Password cannot be empty')
        }

        if(passwordRef.current.value.length <= 6) {
            return setError('Password needs to be at least 6 characters')
        }

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/apply")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return(
        <>
        <Header />
        <hr />
        <div className="container">
            <h2 className="text-center mt-5 mb-5"><b>Create An Account</b></h2>
            <div className="container">
                <form onSubmit={handleSubmit} 
                    style={{display: "grid", 
                            justifyContent: "center"}}>
                    <label><p className="mb-3"><b>Email Address</b></p>
                        <input 
                            className="rounded-md w-100 border border-gray-400 p-3 mb-4"
                            type="email" 
                            placeholder="johndoe@gmail.com"
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

                    {/* <div className="d-flex justify-content-center" style={{backgroundColor: "red"}}> */}
                        {/* <a className="navb h1" href="#">{" "} */}
                            <button className="btn btn-dark text-warning rounded p-3"
                                disabled={loading}
                                type="submit"
                                style={{ width: "380px" }}>
                                <h4><b>Sign up</b></h4>
                            </button>
                        {/* </a> */}
                    {/* </div> */}
                </form>

                <div className="row mt-3 ml-5">
                    <p style={{fontSize: "14px"}}>Already have an account?</p>
                    <div className="col mr-4">
                        <div className="container" style={{textAlign: "right"}}>
                            <a 
                                className="navb" 
                                href="/sign-in"
                                style={{textDecorationLine: 'underline'}}>{" "}
                                <p style={{fontSize: "14px"}}>Log in</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;