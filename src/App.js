import Header from "./Components/Header";
import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import FindMentor from "./Components/Mentees/FindMentor";
import Study from "./Components/Mentees/Study";
import Community from "./Components/Mentees/Community";
import Apply from "./Components/Applications/Apply";
import ApplyMentee from "./Components/Applications/ApplyMentee";
import ApplyMentor from "./Components/Applications/ApplyMentor";
import BecomeMentor from "./Components/Applications/BecomeMentor";
import SignIn from "./Components/Log-in/SignIn";
import SignUp from "./Components/Log-in/SignUp";
import ForgotPassword from "./Components/Log-in/ForgotPassword";
import Route from "./Components/Route";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Route path="/">
        <Body />
      </Route>
      <Route path="/apply">
        <Apply />
      </Route>
      <Route path="/apply-mentor">
        <ApplyMentor />
      </Route>
      <Route path="/apply-mentee">
        <ApplyMentee />
      </Route>
      <Route path="/become-mentor">
        <BecomeMentor />
      </Route>
      <Route path="/find-mentor">
        <FindMentor />
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
      <Route path="/study">
        <Study />
      </Route>
      <Route path="/community">
        <Community />
      </Route>
    </div>
  );
}

export default App;
