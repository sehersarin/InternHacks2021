import "bootstrap/dist/css/bootstrap.min.css";
import portrait from "../../Images/portrait.png";
import chat from "../../Images/chat.png";
import work from "../../Images/work.png";
import {
  // Button,
  Card,
} from "react-bootstrap";
import team from "../../Images/team.png";

function FindMentor() {
  return (
    <>
      <div>
        <div className="container">
          <div className="row d-flex">
            {/* <div className="mt-4 mb-4 mr-2"> */}
            <button
              className="mr-2 dropdown-toggle"
              style={{
                backgroundColor: "transparent",
                borderWidth: "1px",
                borderRadius: "30px",
                borderStyle: "solid",
                borderColor: "#14213D",
                padding: "13px",
              }}
            >
              <b style={{ fontColor: "#14213D" }}>Availability</b>
            </button>
            <button
              className="mr-2 dropdown-toggle"
              style={{
                backgroundColor: "transparent",
                borderWidth: "1px",
                borderRadius: "30px",
                borderStyle: "solid",
                borderColor: "#14213D",
                padding: "13px",
              }}
            >
              <b style={{ fontColor: "#14213D" }}>Industry</b>
            </button>
            <button
              className="mr-2 dropdown-toggle"
              style={{
                backgroundColor: "transparent",
                borderWidth: "1px",
                borderRadius: "30px",
                borderStyle: "solid",
                borderColor: "#14213D",
                padding: "13px",
              }}
            >
              <b style={{ fontColor: "#14213D" }}>Interests</b>
            </button>

            <button
              className="dropdown-toggle"
              style={{
                backgroundColor: "transparent",
                borderWidth: "1px",
                borderRadius: "30px",
                borderStyle: "solid",
                borderColor: "#14213D",
                padding: "13px",
              }}
            >
              <b style={{ fontColor: "#14213D" }}>Expertise</b>
            </button>

            <button
              className="ml-2"
              style={{
                backgroundColor: "transparent",
                borderWidth: "1px",
                borderRadius: "30px",
                borderStyle: "solid",
                borderColor: "#14213D",
                padding: "13px",
              }}
            >
              <b style={{ fontColor: "#14213D" }}>More Filters</b>
            </button>
            <button
              className="ml-auto"
              style={{
                backgroundColor: "transparent",
                borderWidth: "1px",
                borderRadius: "30px",
                borderStyle: "solid",
                borderColor: "#14213D",
                padding: "13px",
                alignItems: "right",
              }}
            >
              <b style={{ fontColor: "#14213D" }}>Sort Mentors By</b>
            </button>
            {/* </div> */}
          </div>
        </div>
        <hr />
        <div className="container d-flex">
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top bg-secondary"
              src={portrait}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Jhon Doe</h5>
              <p className="card-text">Apple</p>
              <p>
                <img src={work} style={{ marginRight: "10px" }} /> Software
                Engineering
              </p>
              <p>
                <img
                  src={chat}
                  style={{ marginLeft: "3px", marginRight: "10px" }}
                />{" "}
                Career advice, interview techniques.
              </p>
            </div>
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top bg-secondary"
              src={portrait}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Jane Doal</h5>
              <p className="card-text">Facebook</p>
              <p>
                <img src={work} style={{ marginRight: "10px" }} /> Technical
                Productor Manager
              </p>
              <p>
                <img
                  src={chat}
                  style={{ marginLeft: "3px", marginRight: "10px" }}
                />{" "}
                Career advice, interview techniques.
              </p>
            </div>
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top bg-secondary"
              src={portrait}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Ashley Yoon</h5>
              <p className="card-text">Google</p>
              <p>
                <img src={work} style={{ marginRight: "10px" }} /> Software
                Engineering
              </p>
              <p>
                <img
                  src={chat}
                  style={{ marginLeft: "3px", marginRight: "10px" }}
                />{" "}
                Career advice, interview techniques.
              </p>
            </div>
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top bg-secondary"
              src={portrait}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Josua Parker</h5>
              <p className="card-text">Amazon</p>
              <p>
                <img src={work} style={{ marginRight: "10px" }} /> Software
                Engineering
              </p>
              <p>
                <img
                  src={chat}
                  style={{ marginLeft: "3px", marginRight: "10px" }}
                />{" "}
                Career advice, interview techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindMentor;
