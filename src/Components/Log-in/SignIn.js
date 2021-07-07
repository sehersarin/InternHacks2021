//import styles css
import React from "react";

function SignIn() {
    const[values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handlePasswordChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    }

    return(
        <div className="container">
            <h2 className="text-center mt-5 mb-5"><b>Welcome Back!</b></h2>
            {/* <p className="text-center mt-4 mb-5">A place to meet other students preparing for technical
            interviews and to find mentorship</p> */}
            <div className="container" 
                style={{
                    display: "grid", 
                    justifyContent: "center",
                }}>
                <p><b>Email Address</b></p>
                <input 
                    className="rounded-md w-auto border border-gray-400 p-3 mb-4"
                    type="text" 
                    placeholder="johndoe@gmail.com">
                </input>
                <p><b>Password</b></p>
                <input 
                    className="rounded-md w-auto border border-gray-400 p-3 mb-4"
                    type="password" 
                    placeholder="password"
                    value={values.password}
                    onChange={handlePasswordChange("password")}>
                </input>

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
                {/* <a className="navbar-brand navb h1" href="/homepage">{" "} */}
                    <button className="btn btn-dark text-warning rounded p-3 mt-2 w-95">
                        <h4><b>Sign in</b></h4>
                    </button>
                {/* </a> */}
                
                <div className="row mt-3">
                    <p className="ml-3 mr-5" style={{fontSize: "14px"}}>New to Tech Mentor Match?</p>
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