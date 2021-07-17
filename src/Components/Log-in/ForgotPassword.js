import { useAuth } from '../../context/AuthContext';
import { useRef, useState } from 'react';
import { Alert } from '@material-ui/lab';

function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value);
            setMessage('Email sent')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return(
        <div className="container">
            <h2 className="text-center mt-5 mb-3"><b>Forgot Password?</b></h2>
            <p className="text-center mb-5">Enter in your email address that's associated
            with your account.</p>
            <div className="container">
                <form onSubmit={handleSubmit}
                    style={{
                        display: "grid", 
                        justifyContent: "center",
                    }}>
                    <label><p className="mb-3"><b>Email Address</b></p>
                        <input 
                            className="rounded-md w-100 border border-gray-400 p-3 mb-4"
                            type="email" 
                            placeholder="johndoe@gmail.com"
                            ref={emailRef} 
                            required />
                        <div className="container"
                            style={{width: "22px"}}
                            backgroundColor="red"/>
                    </label>

                    {error && <Alert severity="error" className="mb-4">{error}</Alert>}
                    {message && <Alert severity="success" className="mb-4">{message}</Alert>}

                    <button className="btn text-warning p-3"
                        disabled={loading}
                        type="submit"
                        style={{ width: "380px", backgroundColor: "#14213D", borderRadius: "10px"}}>
                        <h4><b>Reset Password</b></h4>
                    </button>
                </form>

                <div className="row mt-3" style={{justifyContent: 'center'}}>
                    <p style={{fontSize: "14px"}}>Don't have an account yet?</p>
                    <div className='grid' style={{width: '170px'}}/>
                    <a 
                        className="navb" 
                        href="/sign-up"
                        style={{textDecorationLine: 'underline'}}>{" "}
                        <p style={{fontSize: "14px"}}>Sign up</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;