import logo from "../../Images/logo.JPG";
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

const MenteeLoginHeader = () => {
    const classes=useStyles();

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
              <a className="nav-link navb" href="/community">
                <b>Community</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navb btn text-warning rounded"
                style={{backgroundColor: "#14213D"}}
                href="/mentee-profile"
              >
                <Avatar className={classes.purple}>A</Avatar>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenteeLoginHeader;