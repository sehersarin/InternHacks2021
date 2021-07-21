import aboutUs from "../Images/aboutUs.png";

function AboutUs() {
    return(
        <>
        <div className="row" style={{margin: "auto"}}>
            <div className="col pt-5 pr-5 ml-5 border shadow">
                <h3 style={{textAlign: "center"}}><b>About Us</b></h3>
                <p className="pl-5 pt-4" style={{fontSize: "18px"}}>
                    We are a community of students helping fellow students
                    set their foot in the door in tech careers through peer
                    mentorship and group study sessions. Our goal is for people
                    to find people to study for technical interviews with, learn from peer
                    mentors who have worked in tech roles and companies you're interested in.
                    Join our global community today to be paired with a mentor and 
                    to join our supportive community!
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p style={{textAlign: "right"}}>
                        Made with lots of love,
                        <br/>
                        InternHacks Team 27
                    </p>
                </p>
            </div>
            <div className="col" style={{textAlign: "center"}}>
                <img src={aboutUs} style={{width: "60%"}}/>
            </div>
        </div>
        <div className="d-flex justify-content-center p-5">
            <a className="navbar-brand navb h1" href="/sign-up">
            {" "}
            <button className="btn text-warning pl-4 pr-4 pt-3 pb-3 mt-2 w-95 fs-2"
                style={{backgroundColor: "#14213D", borderRadius: "10px"}}>
                <h4><b>Join our Program</b></h4>
            </button>
            </a>
        </div>
        </>
    )
}

export default AboutUs;