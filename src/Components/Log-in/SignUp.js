import React from "react";

function SignUp() {
    const[values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handlePasswordChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    }

    return(
        <div className="container">
            <h2 className="text-center mt-5 mb-5"><b>Create An Account</b></h2>
            {/* <p className="text-center mt-4 mb-5">A place to meet other students preparing for technical
            interviews and to find mentorship</p> */}
            <div className="container" 
                style={{
                    display: "grid", 
                    justifyContent: "center",
                }}>
                <p><b>Email Address</b></p>
                <div className="container"
                    style={{width: "22px"}}
                    backgroundColor="red">
                </div>
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

                {/* <div className="d-flex justify-content-center" style={{backgroundColor: "red"}}> */}
                    <a className="navb h1" href="/apply">{" "}
                        <button className="btn btn-dark text-warning rounded p-3 mt-2"
                            style={{width: "380px"}}>
                            <h4><b>Sign up</b></h4>
                        </button>
                    </a>
                {/* </div> */}

                <div className="row mt-3">
                    <p className="ml-3 mr-5" style={{fontSize: "14px", color: "white"}}>New to Tech Mentor Match?</p>
                    <p className="ml-5">
                        <p style={{fontSize: "14px", color: "white"}}>Create an account</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;