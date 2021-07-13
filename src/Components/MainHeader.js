import logo from "../Images/logo.JPG";

const MainHeader = () => {
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
              <a className="nav-link navb" aria-current="page" href="/become-mentor">
                <b>Become a Mentor</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navb" href="/find-mentor">
                <b>Find a Mentor</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navb btn btn-dark text-warning rounded"
                href="/sign-in"
              >
                <b>Sign in</b>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
