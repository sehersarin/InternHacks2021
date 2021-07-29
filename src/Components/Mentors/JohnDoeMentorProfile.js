import React from "react";

import portrait from "../../Images/portrait.png";
import work from "../../Images/work.png";
import sentiment from "../../Images/sentiment_very_satisfied.png";
import chat from "../../Images/chat.png";
import dots from "../../Images/dots.png";
import favorite from "../../Images/favorite.png";
import profile from "../../Images/profilePic.png";

function JohnDoeMentorProfile() {
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
              <h2>Hi, I'm John Doe (He/Him)</h2>
              <p>Software Engineering Intern</p>
              <h5>Apple</h5>
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
            Currently a junior at Columbia University majoring in Computer Science, I've
            previously interned at Robinhood and now work at Apple...
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
            <span className="font-weight-bold"> Java, C, C++</span>
          </div>
          <div className="pb-3">
            <img src={work} style={{marginRight: "10px"}}/> Ask me about
            <span className="font-weight-bold"> SWE, Blockchain Technology</span>
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
            <p className="mt-3 mr-3">
              <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2"
                style={{borderRadius: "10px"}}>
                <b>FinTech</b>
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
                <b>Deep Learning</b>
              </span>
            </p>
            <p className="m-3">
              <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2"
                style={{borderRadius: "10px"}}>
                <b>AI & Ethics</b>
              </span>
            </p>
            <p className="m-3">
              <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2" style={{borderRadius: "10px"}}>
                <b>Gaming</b>
              </span>
            </p>
          </div>
          <hr />
        </div>
        <div className="container" style={{width: "80px"}}/>
        <div className="col-1"></div>
        <div className="col">
            <h3 style={{marginBottom: "20px"}}>Reviews</h3>
            <div className="card text-white pb-3" style={{backgroundColor: "white",
                width: "100%", height: "500px"}}>
              <div className="card-body" style={{backgroundColor: "#fff", overflow: "auto",
                width: "100%", height: "100%", marginBottom: "-15px"}}>
                    <div className="card text-white pb-3 pl-2" style={{backgroundColor: "#14213D", borderRadius: "10px"}}>
                        <div className="card-body" style={{backgroundColor: "#14213D", borderRadius: "10px"}}>
                        <b style={{fontSize: "20px"}}>Tell us about your mentorship experience</b>
                        </div>
                        <button className="bg-white text-warning ml-3 pt-3 pb-3" style={{borderRadius: "10px", width: "230px"}}>
                        <b style={{fontSize: "23px"}}>Write a Review</b>
                        </button>
                    </div>
                    <p style={{color: "black", fontSize: "13px", marginTop: "20px"}}>June 04, 2021</p>
                    <p style={{color: "black", fontSize: "17px"}}>
                        I had a great time chatting with John. I promise you that 
                        talking to John will feel like you’re catching up with an old 
                        friend. He is very patient and approachable, and you can tell that 
                        he really wants you to succeed. 
                    </p>
                    <div className="row" style={{width: "100%"}}>
                        <img
                            src={profile}
                            class="img-thumbnail"
                            style={{width: "50px", height: "50px", 
                                borderColor: "transparent", 
                                display: "block", marginLeft: "10px", 
                                marginRight: "10px"}}
                            alt="..."
                        ></img>
                        <p style={{color: "black", marginTop: "10px"}}><b>Julia Lee, </b>SWE Intern @ Intel</p>
                    </div>

                    <hr/>

                    <p style={{color: "black", fontSize: "13px", marginTop: "20px"}}>May 28, 2021</p>
                    <p style={{color: "black", fontSize: "17px"}}>
                        I had a great time chatting with John. I promise you that 
                        talking to John will feel like you’re catching up with an old 
                        friend. He is very patient and approachable, and you can tell that 
                        he really wants you to succeed. 
                    </p>
                    <div className="row" style={{width: "100%"}}>
                        <img
                            src={profile}
                            class="img-thumbnail"
                            style={{width: "50px", height: "50px", 
                                borderColor: "transparent", 
                                display: "block", marginLeft: "10px", 
                                marginRight: "10px"}}
                            alt="..."
                        ></img>
                        <p style={{color: "black", marginTop: "10px"}}><b>Michael Brown, </b>SWE Intern @ Cisco</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default JohnDoeMentorProfile;