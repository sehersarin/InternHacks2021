import React from "react";
import Done from "../../Images/Done.png";
import portrait from "../../Images/portrait.png";
import work from "../../Images/work.png";
import sentiment from "../../Images/sentiment_very_satisfied.png";
import chat from "../../Images/chat.png";
import dots from "../../Images/dots.png";
import favorite from "../../Images/favorite.png";

function JaneDoeMentorProfile() {
  return (
    <div>
        <div className="row pl-4 pt-2 pb-2">
          <div className="col-2">
            <img
              src={portrait}
              class="img-thumbnail h-80 w-75 border border-warning shadow"
              style={{borderRadius: "10px"}}
              alt="..."
            ></img>
          </div>
          <div className="row" style={{marginLeft: "-30px", width: "1100px"}}>
            <div className="col">
              <br/>
              <h2 style={{marginTop: "-20px"}}><b>Mentor</b></h2>
              <h2>Hi, I'm Jane Doe (She/Her)</h2>
              <p>Product Management Intern</p>
              <h5>Facebook</h5>
            </div>
          </div>
          <button className="navb btn text-warning" href="#" 
            style={{
              backgroundColor: "#14213D", 
              borderRadius: "10px",
              height: "40px", 
              marginLeft: "-140px"
            }}>
              <img src={dots} style={{height: "25px", marginTop: "-5px"}}/>
          </button>
          <button className="navb btn text-warning" href="#" 
            style={{
              backgroundColor: "#14213D", 
              borderRadius: "10px",
              height: "40px", 
              width: "45px",
              marginLeft: "10px"
            }}>
              <img src={favorite} style={{height: "35px", marginTop: "-5px", marginLeft: "-10px"}}/>
          </button>
          <a className="navb btn text-warning" href="#" 
            style={{
              backgroundColor: "#14213D", 
              borderRadius: "10px",
              height: "40px", 
              marginLeft: "10px"
            }}>
            <b>Book a Session</b>
          </a>
      </div>
      <hr />
      <div className="row m-2 p-2">
        <div className="col-5">
          <h5 className="pb-2"><b>About me</b></h5>
          <p style={{fontSize: "18px"}}>
            Hello! I'm Jane Doe and I'm a senior majoring in Computer Science at
            the University of Michigan. I've previously interned at Apple as a SWE
            and now at Facebook...
            <a href="#" style={{color: "#FCA311"}}>
              See more
            </a>
          </p>
          <div className="pt-3">
            <img src={sentiment} style={{marginRight: "10px"}} /> I'm mentoring on
            <span className="font-weight-bold">
              {" "}
              Career Advice, Interview Prep
            </span>
          </div>
          <div className="pt-3 pb-3">
            <img src={chat} style={{marginLeft: "3px", marginRight: "10px"}}/> I'm fluent in
            <span className="font-weight-bold"> React, Kotlin, Python</span>
          </div>
          <div className="pb-3">
            <img src={work} style={{marginRight: "10px"}}/> Ask me about
            <span className="font-weight-bold"> PM, SWE, Web Dev</span>
          </div>
          <hr />
          <div className="d-flex">
            <h5>Industry</h5>
            <button className="ml-auto btn text-warning" style={{backgroundColor: "#14213D", 
              borderRadius: "10px", width: "60px", height: "40px"}}>
              <b>Edit</b>
            </button>
          </div>
          <div className="d-flex">
            <p className="mt-3 mr-3">
              <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2"
                style={{borderRadius: "10px"}}>
                <b>Tech</b>
              </span>
            </p>
          </div>
          <hr />
          <div className="d-flex">
            <h5>Interests</h5>
            <button className="ml-auto btn text-warning" style={{backgroundColor: "#14213D", 
              borderRadius: "10px", width: "60px", height: "40px"}}>
              <b>Edit</b>
            </button>
          </div>
          <div className="d-flex">
            <p className="mt-3 mr-3">
              <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2"
                style={{borderRadius: "10px"}}>
                <b>Machine Learning</b>
              </span>
            </p>
            <p className="m-3">
              <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2"
                style={{borderRadius: "10px"}}>
                <b>Web Dev</b>
              </span>
            </p>
            <p className="m-3">
              <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2" style={{borderRadius: "10px"}}>
                <b>Mobile Dev</b>
              </span>
            </p>
          </div>
          <hr />
        </div>
        <div className="container" style={{width: "80px"}}/>
        <div className="col-1"></div>
        <div className="col">
          <h3>Reviews</h3>
          <div className="card text-white pb-3 pl-2" style={{backgroundColor: "#14213D", borderRadius: "10px"}}>
            <div className="card-body" style={{backgroundColor: "#14213D", borderRadius: "10px"}}>
              <b style={{fontSize: "20px"}}>Tell us about your mentorship experience</b>
            </div>
            <button className="bg-white text-warning ml-3 pt-3 pb-3" style={{borderRadius: "10px", width: "230px"}}>
              <b style={{fontSize: "23px"}}>Write a Review</b>
            </button>
          </div>
          <img
            src={Done}
            class="img-thumbnail p-4 mt-2"
            style={{width: "70%", borderColor: "transparent", display: "block", marginLeft: "auto", marginRight: "auto"}}
            alt="..."
          ></img>
          <h5 className="d-flex justify-content-center">No reviews yet</h5>
        </div>
      </div>
    </div>
  );
}

export default JaneDoeMentorProfile;