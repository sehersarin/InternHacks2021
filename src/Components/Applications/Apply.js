function Apply() {
    return(
        <div>
            <h3 className="text-center mt-4 mb-4"><b>Apply Today</b></h3>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card w-9rem h-auto shadow rounded mt-3">
                            <div className="card-body">
                                <h4 className="card-title text-center p-4 m-3">
                                    For Mentors
                                </h4>
                                <p className="card-text text-center p-3 m-2">
                                    Become a Tech Mentor today to impact a fellow student's life by helping them
                                    to get a foot in the door in tech!
                                </p>
                                <div className="d-flex justify-content-center p-3 ">
                                    <a className="navbar-brand navb h1" 
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSeMVuZCK3jHdMzpr7--HgFBao2ZdyhD0hdP79eoE8mdmnLgVA/viewform?usp=sf_link">
                                        {" "}
                                        <button className="btn text-warning rounded p-4 mt-2 w-95 fs-2"
                                            style={{backgroundColor: "#14213D"}}>
                                            <h4><b>Apply to become a Mentor</b></h4>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="card w-9rem h-auto shadow rounded mt-3">
                            <div className="card-body">
                                <h4 className="card-title text-center p-4 m-3">
                                    For Mentees
                                </h4>
                                <p className="card-text text-center p-3 m-2">
                                    Want to get guidance from peer mentors who've worked in the tech roles you're interested in? 
                                    Sign up today!
                                </p>
                                <div className="d-flex justify-content-center p-3 ">
                                    <a className="navbar-brand navb h1" 
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSehkXYwEJeSQwMXC7U_ezLxKfo2822XxTBIjdcrkTnOn1eoGQ/viewform?usp=sf_link">
                                        {" "}
                                        <button className="btn text-warning rounded p-4 mt-2 w-95 fs-2"
                                            style={{backgroundColor: "#14213D"}}>
                                            <h4><b>Apply to become a Mentee</b></h4>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apply;