import React from "react";
import Calendar from '../Calendar/Calendar';

import portrait from "../../Images/portrait.png";
import work from "../../Images/work.png";
import chat from "../../Images/chat.png";
import favorite from "../../Images/favorite.png";

function MenteeProfile() {
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
                <h2 style={{marginTop: "-20px"}}><b>Mentee</b></h2>
                <h2>Hi, I'm Ashley Yoon</h2>
                <p>Georgetown University</p>
                <p>Class of 2024</p>
              </div>
            </div>
            <button className="navb btn text-warning"
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
              <b>Edit</b>
            </a>
        </div>
        <hr />
        <div className="row m-2 p-2">
          <div className="col-5">
            <h5 className="pb-2"><b>About me</b></h5>
            <p style={{fontSize: "18px"}}>
              I am a freshman at Georgetown University majoring in Computer Science. 
            </p>
            <div className="pt-3 pb-3">
              <img src={chat} style={{marginLeft: "3px", marginRight: "10px"}}/> I'm fluent in
              <span className="font-weight-bold"> Java, Python</span>
            </div>
            <div className="pb-3">
              <img src={work} style={{marginRight: "10px"}}/> I'm looking for a career in
              <span className="font-weight-bold"> Web Dev, App Dev</span>
            </div>
            <hr />
            <div className="d-flex">
              <h5>Industries I'm interested in:</h5>
              <button className="ml-auto btn text-warning" style={{backgroundColor: "#14213D", 
                borderRadius: "10px", width: "60px", height: "40px"}}>
                <b>Edit</b>
              </button>
            </div>
            <div className="d-flex">
              <p className="mt-3 mr-3">
                <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2"
                  style={{borderRadius: "10px"}}>
                  <b>Technology</b>
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
                  <b>AI & Ethics</b>
                </span>
              </p>
              <p className="m-3">
                <span className="border border-warning shadow pl-4 pr-4 pt-2 pb-2" style={{borderRadius: "10px"}}>
                  <b>Healthcare</b>
                </span>
              </p>
            </div>
            <hr />
          </div>
          <div className="container" style={{width: "80px"}}/>
          <div className="col-1"></div>
          <div className="col">
            <h3>Schedule</h3>
            <br/>
            <div className="card text-white pb-3" style={{backgroundColor: "#14213D",
                width: "100%", height: "400px"}}>
              <div className="card-body" style={{backgroundColor: "#14213D",
                width: "100%", height: "10px"}}>
                  <p style={{fontSize: "20px", fontWeight: "700", color: "white",
                      marginTop: "-5px"}}>
                    Mon, Jul 26 - Sun, Aug 1
                  </p>
              </div>
              <div className="card-body" style={{backgroundColor: "#fff", overflow: "auto",
                width: "100%", height: "320px", marginBottom: "-15px"}}>
                  <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MenteeProfile;
