import logo from "../Images/logo.JPG";

const Header = () => {
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
                Find a Mentor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navb" href="/study">
                Study
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navb" href="/community">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navb btn btn-dark text-warning rounded"
                href="#"
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
