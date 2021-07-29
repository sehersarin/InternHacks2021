import React, { useRef, useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { useHistory } from "react-router-dom";
import { Alert } from '@material-ui/lab';

function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(emailRef.current.value.length==0 || 
            passwordRef.current.value.length==0) {
            return setError('Email and/or password is empty')
        }

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailRef.current.value)) {
            return setError('You have entered an invalid email address')
        }

        try {
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return(
        <div className="container">
            <h2 className="text-center mt-5 mb-5"><b>Welcome Back!</b></h2>
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

                    <div className="row"
                        style={{justifyContent: "center"}}>
                        <input
                            className="rounded-md w-auto border border-gray-400"
                            type="checkbox"
                            value="remember_me"/>
                        <label className="ml-2"
                            for="remember_me">Remember Me</label>
                        <div className="grid"
                            style={{width: "130px"}}>
                        </div>
                        <a 
                            className="navb" 
                            href="/forgot-password"
                            style={{textDecorationLine: 'underline'}}>{" "}
                            <p style={{fontSize: "16px"}}>Forgot Password</p>
                        </a>
                    </div>

                    {error && <Alert severity="error" className="mb-4">{error}</Alert>}

                    <button className="btn text-warning p-3"
                        disabled={loading}
                        type="submit"
                        style={{ width: "380px", backgroundColor: "#14213D", borderRadius: "10px" }}>
                        <h4><b>Sign in</b></h4>
                    </button>
                </form>
                
                <div className="row mt-3 mb-5" style={{justifyContent: 'center'}}>
                    <p className="mr-5" style={{fontSize: "14px"}}>New to Tech Mentor Match?</p>
                    <a 
                        className="navb ml-5" 
                        href="/sign-up"
                        style={{textDecorationLine: 'underline'}}>{" "}
                        <p style={{fontSize: "14px"}}>Create an account</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SignIn;