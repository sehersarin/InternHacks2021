import Header from "./Components/Header";
import Body from "./Components/Body";
import AboutUs from "./Components/AboutUs";
import FindMentor from "./Components/Mentees/FindMentor";
import Study from "./Components/Mentees/Study";
// import Community from "./Components/Mentees/Community";
import Apply from "./Components/Applications/Apply";
import BecomeMentor from "./Components/Applications/BecomeMentor";
import SignIn from "./Components/Log-in/SignIn";
import SignUp from "./Components/Log-in/SignUp";
import ForgotPassword from "./Components/Log-in/ForgotPassword";
import MenteeProfile from "./Components/Mentees/MenteeProfile";
import MenteeEditSettings from "./Components/Mentees/MenteeEditSettings";
import Schedule from "./Components/Calendar/Schedule";
import Chat from "./Components/Mentees/Chat";
import SoftwareEngineer from "./Components/Mentees/SoftwareEngineer";
import ProductorManager from "./Components/Mentees/ProductorManager";
import ProductDesigner from "./Components/Mentees/ProductDesigner";
// import Route from "./Components/Route";
import { AuthProvider } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import PrivateRoute from "./Components/Log-in/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import Interview from "./Components/Mentees/Interview";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Header />
          <hr />
          <Switch>
            <Route exact path="/" component={withRouter(Body)} />

            <PublicRoute
              exact
              path="/become-mentor"
              component={withRouter(BecomeMentor)}
            />
            <PublicRoute
              exact
              path="/about-us"
              component={withRouter(AboutUs)}
            />
            <PublicRoute exact path="/sign-in" component={withRouter(SignIn)} />
            <PublicRoute exact path="/sign-up" component={withRouter(SignUp)} />
            <PublicRoute
              exact
              path="/forgot-password"
              component={withRouter(ForgotPassword)}
            />

            <PrivateRoute exact path="/apply" component={withRouter(Apply)} />
            <PrivateRoute
              exact
              path="/find-mentor"
              component={withRouter(FindMentor)}
            />
            <PrivateRoute
              exact
              path="/find-mentor/software-engineer"
              component={withRouter(SoftwareEngineer)}
            />
            <PrivateRoute
              exact
              path="/find-mentor/productor-manager"
              component={withRouter(ProductorManager)}
            />
            <PrivateRoute
              exact
              path="/find-mentor/productor-designer"
              component={withRouter(ProductDesigner)}
            />

            <PrivateRoute exact path="/study" component={withRouter(Study)} />
            {/* <PrivateRoute exact path='/community' component={withRouter(Community)} /> */}
            <PrivateRoute
              exact
              path="/schedule"
              component={withRouter(Schedule)}
            />
            <PrivateRoute exact path="/chat" component={withRouter(Chat)} />
            <PrivateRoute
              exact
              path="/mentee-profile"
              component={withRouter(MenteeProfile)}
            />
            <PrivateRoute
              exact
              path="/mentee-edit-settings"
              component={withRouter(MenteeEditSettings)}
            />
            <PrivateRoute
              exact
              path="/interview"
              component={withRouter(Interview)}
            />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
