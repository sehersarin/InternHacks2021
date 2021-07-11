import Header from "./Components/Header";
import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import FindMentor from "./Components/Mentees/FindMentor";
import Study from "./Components/Mentees/Study";
import Community from "./Components/Mentees/Community";
import Apply from "./Components/Applications/Apply";
import BecomeMentor from "./Components/Applications/BecomeMentor";
import SignIn from "./Components/Log-in/SignIn";
import SignUp from "./Components/Log-in/SignUp";
import ForgotPassword from "./Components/Log-in/ForgotPassword";
import MenteeProfile from "./Components/Mentees/MenteeProfile";
// import Route from "./Components/Route";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"

function App() {
  return (
    <Router>
    <AuthProvider>
      {/* <Router> */}
      {/* <Switch> */}
      <div>
        {/* <Header />
        <hr /> */}
        <Switch>
          <Route exact path='/' component={withRouter(Body)}/>
          <Route exact path='/apply' component={withRouter(Apply)} />
          <Route exact path='/become-mentor' component={withRouter(BecomeMentor)}/>
          <Route exact path='/sign-in' component={withRouter(SignIn)} />
          <Route exact path='/sign-up' component={withRouter(SignUp)}/>
          <Route exact path='/forgot-password' component={withRouter(ForgotPassword)} />
          <Route exact path='/find-mentor' component={withRouter(FindMentor)}/>
          <Route path='/study' component={withRouter(Study)} />
          <Route path='/community' component={withRouter(Community)} />
          <Route path='/mentee-profile' component={withRouter(MenteeProfile)} />

        {/* <Route path="/">
          <Body />
        </Route>
        <Route path="/apply">
          <Apply />
        </Route>
        <Route path="/become-mentor">
          <BecomeMentor />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/find-mentor">
          <FindMentor />
        </Route>
        <Route path="/study">
          <Study />
        </Route>
        <Route path="/community">
          <Community />
        </Route> */}
        </Switch>
      </div>
      {/* </Router> */}
      {/* </Switch> */}
    </AuthProvider>
    </Router>
  );
}

export default App;
