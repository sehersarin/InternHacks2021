import MenteeLoginHeader from "./MenteeLoginHeader";
import friends from "../../Images/team.png";
const MenteeProfile = () => {
  return (
    <div>
      <MenteeLoginHeader />
      <hr />
      <div className="container">
        <div className="row m-3 p-3">
          <div className="col-3">
            <img
              src={friends}
              class="img-thumbnail h-75 w-75 border border-warning p-4"
              alt="..."
            ></img>
          </div>
          <div className="col">
            <h2>Hi, I am Jhon Done</h2>
            <p>Software Engineering Intern</p>
            <h5>Facebook</h5>
          </div>
          <div className="col-3">
            <a className="navb btn btn-dark text-warning rounded" href="#">
              <b>Book a Session</b>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="row m-2 p-2">
        <div className="col-5">
          <h5>About me</h5>
          <p>
            I am a junior at Columbia University mojoring in Computer Science. I
            have previously interned at Apple and now at Facebook
          </p>
          <hr />
          <h5>Industry</h5>
          <div className="d-flex">
            <p className="m-3">
              <span className="border border-warning rounded p-2">
                Technology
              </span>
            </p>
            <button className="ml-auto  btn btn-dark text-warning rounded">
              Edit
            </button>
          </div>
          <hr />
          <h5>Interests</h5>
          <div className="d-flex">
            <p className="m-3 ">
              <span className="border border-warning rounded p-2">
                Deep Learning
              </span>
            </p>
            <p className="m-3">
              <span className="border border-warning rounded p-2">
                AI & Ethics
              </span>
            </p>
            <p className="m-3">
              <span className="border border-warning rounded p-2">Gaming</span>
            </p>
            <button className="ml-auto  btn btn-dark text-warning rounded">
              Edit
            </button>
          </div>
          <hr />
        </div>
        <div className="col-1"></div>
        <div className="col">
          <h3>Reviews</h3>
          <div className="card text-white bg-dark rounded">
            <div className="card-body ">
              Tell us about your mentorship experience
            </div>
            <button className="w-50 bg-white text-warning rounded ml-3">
              Write a review
            </button>
          </div>
          <img
            src={friends}
            class="img-thumbnail w-100 h-50 border p-4 mt-2"
            alt="..."
          ></img>
          <h5 className="d-flex justify-content-center">No reviews yet</h5>
        </div>
      </div>
    </div>
  );
};

export default MenteeProfile;
