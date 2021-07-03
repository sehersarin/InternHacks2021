function Apply() {
    return(
        <div>
            <h4 className="text-center"><b>Apply Today</b></h4>
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
                                    <a className="navbar-brand navb h1" href="/apply-mentor">
                                        {" "}
                                        <button className="btn btn-dark text-warning rounded p-4 mt-2 w-95 fs-2">
                                            Apply to be a Mentor
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
                                    Want to get guidance from peer mentors who have worked in the tech roles you're interested in
                                    or study for technical interviews with? Sign up today!
                                </p>
                                <div className="d-flex justify-content-center p-3 ">
                                    <a className="navbar-brand navb h1" href="/apply-mentee">
                                        {" "}
                                        <button className="btn btn-dark text-warning rounded p-4 mt-2 w-95 fs-2">
                                            Apply to be a Mentee
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