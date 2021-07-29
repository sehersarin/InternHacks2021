import "bootstrap/dist/css/bootstrap.min.css";
import FindMentorComponent from "./FindMentorComponent";

function FindMentor() {
  const professionals = [
    {
      firstName: "John",
      lastName: "Doe",
      industry: "Apple",
      position: "Software Engineering Intern",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      industry: "Facebook",
      position: "Product Management Intern",
    },
    {
      firstName: "Jamie",
      lastName: "Lee",
      industry: "Google",
      position: "Software Engineering Intern",
    },
    {
      firstName: "Joshua",
      lastName: "Whitebell",
      industry: "Amazon",
      position: "Software Engineering Intern",
    },
    {
      firstName: "Seher",
      lastName: "Sarin",
      industry: "Google",
      position: "Product Management Intern",
    },
    {
      firstName: "Adhel",
      lastName: "Geng",
      industry: "Google",
      position: "Product Design Intern",
    },
  ];
  return (
    <>
      <div>
        <div className="container">
          <div className="row d-flex">
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
            <div className="btn-group"></div>
            <div className="dropdown">
              <button
                className=" dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
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
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  className="dropdown-item"
                  href="/find-mentor/software-engineer"
                >
                  Software Engineering
                </a>
                <a
                  className="dropdown-item"
                  href="/find-mentor/productor-manager"
                >
                  Technical Productor Manager
                </a>
                <a
                  className="dropdown-item"
                  href="/find-mentor/productor-designer"
                >
                  Product Designer
                </a>
              </div>
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
          </div>
        </div>
        <hr />

        <div className="ml-5">
          {professionals.map((person, i) => {
            return (
              <div className="d-inline-flex">
                <FindMentorComponent
                  key={i}
                  firstName={person.firstName}
                  lastName={person.lastName}
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
