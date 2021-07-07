import team from "../Images/team.png";

const Body = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card w-18rem h-auto shadow rounded mt-3">
              <div className="card-body">
                <h4 className="card-title text-center p-4 m-3">
                  Mentorship with a Purpose
                </h4>
                <p className="card-text text-center p-3 m-2">
                  Get guidance, find people to study for technical interviews
                  with, learn from peers mentors who have worked in the tech
                  roles and companies you are interested in, and join our global
                  community.
                </p>
                <div className="d-flex justify-content-center p-3 ">
                  <a className="navbar-brand navb h1" href="/sign-up">
                    {" "}
                    <button className="btn btn-dark text-warning rounded p-4 mt-2 w-95 fs-2">
                      <h4><b>Join our Program</b></h4>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img className="w-100" src={team} alt="team" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
