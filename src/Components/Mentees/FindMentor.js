import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import team from "../../Images/team.png";

function FindMentor() {
   return(
       <div>
           <div className="container">
               <div className="row">
                   {/* <div className="mt-4 mb-4 mr-2"> */}
                       <button className="mr-2" style={{
                           backgroundColor: "transparent",
                           borderWidth: "1px",
                           borderRadius: "30px",
                           borderStyle: "solid",
                           borderColor: "#14213D",
                           padding: "13px"}}>
                           <b style={{fontColor: "#14213D"}}>Availability</b>
                       </button>
                       <button className="mr-2" style={{
                           backgroundColor: "transparent",
                           borderWidth: "1px",
                           borderRadius: "30px",
                           borderStyle: "solid",
                           borderColor: "#14213D",
                           padding: "13px"}}>
                           <b style={{fontColor: "#14213D"}}>Industry</b>
                       </button>
                       <button className="mr-2" style={{
                           backgroundColor: "transparent",
                           borderWidth: "1px",
                           borderRadius: "30px",
                           borderStyle: "solid",
                           borderColor: "#14213D",
                           padding: "13px"}}>
                           <b style={{fontColor: "#14213D"}}>Interests</b>
                       </button>
                       <button style={{
                           backgroundColor: "transparent",
                           borderWidth: "1px",
                           borderRadius: "30px",
                           borderStyle: "solid",
                           borderColor: "#14213D",
                           padding: "13px"}}>
                           <b style={{fontColor: "#14213D"}}>Expertise</b>
                       </button>
                       <button style={{
                           backgroundColor: "transparent",
                           borderWidth: "1px",
                           borderRadius: "30px",
                           borderStyle: "solid",
                           borderColor: "#14213D",
                           padding: "13px",
                           alignItems: "right"}}>
                           <b style={{fontColor: "#14213D"}}>Sort Mentors By</b>
                       </button>
                   {/* </div> */}
               </div>
           </div>
           <hr/>
           <div className="container m-5" style={{backgroundColor: "red"}}>
               <div className="row">
                   {/* <div className="m-5"> */}
                       <Card style={{ width : '16rem', marginRight: '20px'}}>
                           <Card.Img variant="top" src={team}/>
                           <Card.Body>
                               <Card.Title>John Doe</Card.Title>
                               <Card.Text>Biography</Card.Text>
                           </Card.Body>
                       </Card>
                       <Card style={{ width : '16rem'}}>
                           <Card.Img variant="top" src={team}/>
                           <Card.Body>
                               <Card.Title>Jane Doe</Card.Title>
                               <Card.Text>Biography</Card.Text>
                           </Card.Body>
                       </Card>
                   {/* </div> */}
               </div>
           </div>
       </div>
   )
}
 
export default FindMentor;