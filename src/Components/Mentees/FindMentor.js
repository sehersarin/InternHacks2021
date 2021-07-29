import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import FindMentorComponent from "./FindMentorComponent";
import { 
  professionals, 
  availabilityOptions, 
  industryOptions,
  interestOptions,
  expertiseOptions,
} from './arrays';

function FindMentor() {
    const [availabilityChecked, setAvailabilityChecked] = useState(
      new Array(availabilityOptions.length).fill(false)
    )
    
    const [industryChecked, setIndustryChecked] = useState(
      new Array(industryOptions.length).fill(false)
    )

    const [interestChecked, setInterestChecked] = useState(
      new Array(interestOptions.length).fill(false)
    )
    
    const [expertiseChecked, setExpertiseChecked] = useState(
      new Array(expertiseOptions.length).fill(false)
    )

    const [monChecked, setMonChecked] = useState(false);

    useEffect(() => {
      console.log(monChecked);
    }, [monChecked]);

    const handleAvailabilityChange = (pos) => {
      const updateAvailability = availabilityChecked.map((item, index) =>
        index===pos ? !item : item
      );

      console.log(updateAvailability);
      setAvailabilityChecked(updateAvailability);

      for(let i=0; i<updateAvailability.length; i++) {
        if(updateAvailability[i]===true) {
          // for(let j=0; j<professionals.length; j++) {
            if(availabilityOptions[i]===availabilityOptions[0]) {
              console.log(availabilityOptions[0]);
              setMonChecked(current => !current)
            }
        } else {
          setMonChecked(current => !current)
        }
      }
    }

    const handleIndustryChange = (pos) => {
      const updateIndustry = industryChecked.map((item, index) =>
        index===pos ? !item : item
      );

      console.log(updateIndustry);
      setIndustryChecked(updateIndustry);
    }

    const handleInterestChange = (pos) => {
      const updateInterest = interestChecked.map((item, index) =>
        index===pos ? !item : item
      );

      console.log(updateInterest);
      setInterestChecked(updateInterest);
    }

    const handleExpertiseChange = (pos) => {
      const updateExpertise = expertiseChecked.map((item, index) =>
        index===pos ? !item : item
      );

      console.log(updateExpertise);
      setExpertiseChecked(updateExpertise);
    }

    return (
      <>
        <div>
          <div className="container">
            <div className="row d-flex">
            <div className="btn-group"></div>
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
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
                  <b style={{ fontColor: "#14213D" }}>Availability</b>
                </button>
                <ul
                  className="dropdown-menu checkbox-menu allow-focus"
                  aria-labelledby="dropdownMenuButton"
                >
                  {availabilityOptions.map(({ day }, index) => {
                    return(
                      <li key={index} className="dropdown-item">
                        <label>
                        <input type="checkbox" 
                          value={day}
                          style={{marginRight: "10px"}}
                          checked={availabilityChecked[index]}
                          onClick={() => handleAvailabilityChange(index)}
                        />{day}
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="btn-group"></div>
              <div className="dropdown">
                <button
                  className="ml-2 dropdown-toggle"
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
                  <b style={{ fontColor: "#14213D" }}>Industry</b>
                </button>
                <ul
                  className="dropdown-menu checkbox-menu allow-focus"
                  aria-labelledby="dropdownMenuButton"
                >
                  {industryOptions.map(({ industry }, index) => {
                    return(
                      <li key={index} className="dropdown-item">
                        <label>
                        <input type="checkbox" 
                          value={industry}
                          style={{marginRight: "10px"}}
                          checked={industryChecked[index]}
                          onClick={() => handleIndustryChange(index)}
                        />{industry}
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="btn-group"></div>
              <div className="dropdown">
                <button
                  className="ml-2 dropdown-toggle"
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
                  <b style={{ fontColor: "#14213D" }}>Interests</b>
                </button>
                <ul
                  className="dropdown-menu checkbox-menu allow-focus"
                  aria-labelledby="dropdownMenuButton"
                >
                  {interestOptions.map(({ interest }, index) => {
                    return(
                      <li key={index} className="dropdown-item">
                        <label>
                        <input type="checkbox" 
                          value={interest}
                          style={{marginRight: "10px"}}
                          checked={interestChecked[index]}
                          onClick={() => handleInterestChange(index)}
                        />{interest}
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="btn-group"></div>
              <div className="dropdown">
                <button
                  className="ml-2 dropdown-toggle"
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
                <ul
                  className="dropdown-menu checkbox-menu allow-focus"
                  aria-labelledby="dropdownMenuButton"
                >
                  {expertiseOptions.map(({ expertise }, index) => {
                    return(
                      <li key={index} className="dropdown-item">
                        <label>
                        <input type="checkbox" 
                          value={expertise}
                          style={{marginRight: "10px"}}
                          checked={expertiseChecked[index]}
                          onClick={() => handleExpertiseChange(index)}
                        />{expertise}
                        </label>
                      </li>
                    )
                  })}
                </ul>
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
            {/* <div className="d-inline-flex"> */}
              {monChecked===true ? 
                <div className="d-inline-flex">
                  <FindMentorComponent
                    key={0}
                    firstName={professionals[0].firstName}
                    lastName={professionals[0].lastName}
                    company={professionals[0].company}
                    position={professionals[0].position}
                  />
                  <FindMentorComponent
                    key={2}
                    firstName={professionals[2].firstName}
                    lastName={professionals[2].lastName}
                    company={professionals[2].company}
                    position={professionals[2].position}
                  />
                </div>
                :
                <>
                {professionals.map((person, i) => {
                  return (
                    <div className="d-inline-flex">
                      <FindMentorComponent
                        key={i}
                        firstName={person.firstName}
                        lastName={person.lastName}
                        company={person.company}
                        position={person.position}
                      />
                    </div>
                  );
                })}
                </>
              }
          </div>
        </div>
      </>
    );
}

export default FindMentor;
