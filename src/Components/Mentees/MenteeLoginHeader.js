import React, { useState } from 'react';
import logo from "../../Images/logo.JPG";
import { Menu, MenuItem, Button } from '@material-ui/core';

import profilePic from '../../Images/profilePic.png';
import expandMore from '../../Images/expandMore.png';
import calendar from '../../Images/calendar.png';
import chat from '../../Images/chat.png';
import notification from '../../Images/notification.png';

import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function MenteeLoginHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [setError] = useState("");
  const { signout } = useAuth();
  const history = useHistory();
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  async function handleSignOut() {
    setError("");

    try {
      await signout();
      history.push("/sign-in");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header w-25">
            <a className="navbar-brand navb h1" href="/">
              {" "}
              <img className="w-25" src={logo} alt="logo" />{" "}
              <strong> Tech Mentor Match</strong>
            </a>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link navb" aria-current="page" href="/find-mentor">
                <b>Find a Mentor</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navb" href="/study">
                <b>Study</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navb" href="/chat">
                <img src={chat} style={{height: '21px', width: '18px', marginRight: '7px'}}/>
              </a>
            </li>
            <li className="nav-item">
              <button style={{backgroundColor: "transparent", borderColor: "transparent", marginTop: "-10px"}} >
                <img src={notification} 
                  style={{height: '28px', width: '28px', marginBottom: '-13px', marginRight: '2px'}}
                  />
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link navb" href="/schedule">
                <img src={calendar} style={{height: '28px', width: '28px', marginTop: '-3px', marginRight: '10px'}}/>
              </a>
            </li>
            <li className="nav-item">
                <img src={profilePic} style={{width: '40px', height: '40px'}}/>
                <Button 
                  aria-controls="simple-menu" 
                  aria-haspopup="true" 
                  onClick={handleClick}
                  style={{backgroundColor: 'transparent', height: '20px', marginLeft: '-15px'}}
                >
                  <img src={expandMore} style={{width: '20px', height: '20px'}}/>
                </Button>

                <Menu 
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem 
                    onClick={handleClose}>
                      <a href="/mentee-profile" 
                        style={{color: 'black', textDecorationLine: 'none'}}>
                        Profile
                      </a>
                  </MenuItem>
                  <MenuItem 
                    onClick={handleClose}>
                      <a href="/mentee-edit-settings" 
                        style={{color: 'black', textDecorationLine: 'none'}}>
                        Edit Settings
                      </a>
                  </MenuItem>
                  <MenuItem onClick={handleSignOut}>
                      Sign Out
                  </MenuItem>
                </Menu>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenteeLoginHeader;