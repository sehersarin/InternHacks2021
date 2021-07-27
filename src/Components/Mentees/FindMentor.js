import "bootstrap/dist/css/bootstrap.min.css";
import FindMentorComponent from "./FindMentorComponent";
import {
  // Button,
  Card,
} from "react-bootstrap";
import team from "../../Images/team.png";

function FindMentor() {
  const profesionals = [
    {
      name: "Jhon Doe",
      industry: "Apple",
      position: "Software Engineering",
    },
    {
      name: "Jane Doal",
      industry: "Facebook",
      position: " Technical Productor Manager",
    },
    {
      name: "Ashley Yoon",
      industry: "Google",
      position: "Software Engineering",
    },
    {
      name: "Josua Parker",
      industry: "Amazon",
      position: "Software Engineering",
    },
    {
      name: "Sebas Muriel",
      industry: "Google",
      position: "Technical Productor Manager",
    },
  ];
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
            <div className="btn-group">
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
            </div>

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

        <div className="ml-5">
          {profesionals.map((person, i) => {
            return (
              <div className="d-inline-flex">
                <FindMentorComponent
                  key={i}
                  name={person.name}
                  industry={person.industry}
                  position={person.position}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FindMentor;
