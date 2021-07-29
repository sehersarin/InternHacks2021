import portrait from "../../Images/portrait.png";
import chat from "../../Images/chat.png";
import work from "../../Images/work.png";

const FindMentorComponent = ({ firstName, lastName, industry, position }) => {
  return (
    <div>
      <a className="nav-link navb" aria-current="page" 
        href={"/" + firstName.toLowerCase() + "-" + lastName.toLowerCase()}
        style={{color: "black"}}>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            className="card-img-top bg-secondary"
            src={portrait}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{firstName}{" "}{lastName}</h5>
            <p className="card-text">{industry}</p>
            <p>
              <img src={work} style={{ marginRight: "10px" }} /> {position}
            </p>
            <p>
              <img
                src={chat}
                style={{ marginLeft: "3px", marginRight: "10px" }}
              />{" "}
              Career advice, interview techniques.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FindMentorComponent;
