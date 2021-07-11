import businessplan from "../../Images/businessplan.png";
import friends from "../../Images/friends.png";
import nomsg from "../../Images/nomsg.png";
import Header from "../../Components/Header";
 
function BecomeMentor() {
    return(
        <>
        <Header />
        <hr />
        <div className="container">
            <h2 className="mt-5"><b>Simple ways to get started</b></h2>
            <div className="row" style={{justifyContent: "center"}}>
                <img style={{width: "340px", marginRight: "30px", marginBottom: "10px"}} src={businessplan}/>
                <img style={{width: "340px", marginRight: "30px", marginBottom: "10px"}} src={friends}/>
                <img style={{width: "340px", marginRight: "30px", marginBottom: "10px"}} src={nomsg}/>
            </div>
            <div className="row" style={{justifyContent: "center", marginBottom: "30px"}}>
                <div className="col">
                    <h4 className="text-center"><b>Apply to become a mentor</b></h4>
                    <p className="text-center" style={{fontSize: "16px"}}>Have your Google calendar ready. Our team
                    will reach out to you soon after you apply!</p>
                </div>
                <div className="col">
                    <h4 className="text-center"><b>Welcome to the club!</b></h4>
                    <p className="text-center" style={{fontSize: "16px"}}>Once you're approved, you'll get an invitation
                    to our Mentor Club!</p>
                </div>
                <div className="col">
                    <h4 className="text-center"><b>Mentor the world!</b></h4>
                    <p className="text-center" style={{fontSize: "16px"}}>Students can book for a session with you!</p>
                </div>
            </div>
            <hr />
            <div class="row" style={{justifyContent: "left", marginTop: "30px"}}>
                <h4><b>Ready to mentor the world?</b></h4>
                <div class="col">
                    <div className="container" style={{textAlign: "right"}}>
                        <p className="text-right">Impact a fellow student's life by helping them get a foot 
                        in the door in tech!</p>
                        <a className="navbar-brand navb h1" href="/sign-up">
                            {" "}
                            <button className="btn btn-dark text-warning rounded p-3 mb-2 w-95">
                                <h4><b>Apply to become a Mentor</b></h4>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
 
export default BecomeMentor;