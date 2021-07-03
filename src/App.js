import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import FindMentor from './Components/FindMentor';
import Study from './Components/Study';
import Community from './Components/Community';
import Apply from './Components/Apply';
import ApplyMentee from './Components/ApplyMentee';
import ApplyMentor from './Components/ApplyMentor';
import Route from './Components/Route';

function App() {
  return (
    <div>
     <Header/>
     <hr />
     <Route path='/'>
       <Body/>
     </Route>
     <Route path='/apply'>
       <Apply />
     </Route>
     <Route path='/apply-mentor'>
       <ApplyMentor />
     </Route>
     <Route path='/apply-mentee'>
       <ApplyMentee />
     </Route>
     <Route path='/find-mentor'>
       <FindMentor />
     </Route>
     <Route path='/study'>
       <Study />
     </Route>
     <Route path='/community'>
       <Community />
     </Route>
     <Footer/>
    </div>
  );
}

export default App;
