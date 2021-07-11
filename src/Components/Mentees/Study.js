import MenteeLoginHeader from "./MenteeLoginHeader"

function Study() {
  return (
    <>
    <MenteeLoginHeader />
    <hr />
    <div>
      <div className="d-flex ml-4 mt-4">
        <h2><b>Dashboard</b></h2>
        <div className="container" style={{textAlign: "right"}}>
          <a className="navbar-brand navb h1" href="#">
              {" "}
              <p className="text-warning">
                <b>Bookmarked challenges</b>
              </p>
          </a>
        </div>
      </div>
      <hr />
      <h4 className="pt-3 ml-4">Your Skills</h4>
      <div className="row">
        <div className="col-6">
          <div className="card-body border border-gray shadow rounded m-4">
            <p>Interview Preparation</p>
            <h2>Interview Preparation Kit</h2>
            <a href="#" className="btn btn-dark text-warning rounded mt-3">
              <button className="btn btn-dark text-warning rounded pl-4 pr-4 w-95">
                  <h4><b>View</b></h4>
              </button>
            </a>
          </div>
        </div>
        <div className="col-6">
          <div className="card-body border border-gray shadow m-4">
            <p>New Skill</p>
            <h2>Add your first skill</h2>
            <a href="#" className="btn btn-dark text-warning rounded mt-3">
              <button className="btn btn-dark text-warning rounded pl-4 pr-4 w-95">
                  <h4><b>Explore Skills</b></h4>
              </button>
            </a>
          </div>
        </div>
      </div>
      <h4 className="pt-3 ml-4">Skills Available for Practice</h4>
      <div className="card-body border border-gray shadow m-4">
        <div className="row m-3">
          <div className="point col text-center border border-3 p-3">
            Algorithms
          </div>
          <div className="point col text-center border border-3 p-3">
            Artificial Intelligence
          </div>
          <div className="point col text-center border border-3 p-3">C++</div>
        </div>
        <div className="row m-3">
          <div className="point col text-center border border-3 p-3">
            Database
          </div>
          <div className="point col text-center border border-3 p-3">Java</div>
          <div className="point col text-center border border-3 p-3">SQL</div>
        </div>
        <div className="row m-3">
          <div className="point col text-center border border-3 p-3">
            Data Structure
          </div>
          <div className="point col text-center border border-3 p-3">C</div>
          <div className="point col text-center border border-3 p-3">
            Mathematics
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Study;
