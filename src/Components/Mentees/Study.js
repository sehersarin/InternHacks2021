function Study() {
  return (
    <div>
      <div className="d-flex  m-4">
        <div className="fs-2">Dashboard</div>
        <div className="ms-auto mt-auto text-warning">
          Bookmarked challenges
        </div>
      </div>
      <hr />
      <h4 className="p-3 ms-4">Your Skills</h4>
      <div className="row">
        <div className="col-6">
          <div className="card-body border border-dark shadow m-4">
            <p>Interview Preparation</p>
            <h2>Interview Preparation Kit</h2>
            <a href="#" className="btn btn-dark text-warning rounded fs-3 w-25">
              View
            </a>
          </div>
        </div>
        <div className="col-6">
          <div className="card-body border border-dark shadow m-4">
            <p>New Skill</p>
            <h2>Add your first skill</h2>
            <a href="#" className="btn btn-dark text-warning rounded fs-3">
              Explore Skills
            </a>
          </div>
        </div>
      </div>
      <h4 className="p-3 ms-4">Skills Available for Practice</h4>
      <div className="card-body border border-dark shadow m-4">
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
  );
}

export default Study;
