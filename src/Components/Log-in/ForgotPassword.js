import Header from "../Header"

function ForgotPassword() {
    return(
        <>
        <Header />
        <hr />
        <div className="container">
            <h2 className="text-center mt-5 mb-3"><b>Forgot Password?</b></h2>
            <p className="text-center mb-5">Enter in your email address that's associated
            with your account.</p>
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

                {/* <a className="navbar-brand navb h1" href="/homepage">{" "} */}
                <button className="btn btn-dark text-warning rounded p-3 mt-2 w-95">
                    <h4><b>Submit</b></h4>
                </button>
                {/* </a> */}
                <div className="row mt-3">
                    <p className="ml-3 mr-5" style={{fontSize: "14px", color: "white"}}>New to Tech Mentor Match?</p>
                    <p className="ml-5">
                        <p style={{fontSize: "14px", color: "white"}}>Create an account</p>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword;