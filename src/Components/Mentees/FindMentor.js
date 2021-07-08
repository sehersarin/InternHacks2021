import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import team from "../../Images/team.png";

function FindMentor() {
  return (
    <div>
      <div className="container">
        <div className="col-12">
          <div className="mt-4 mb-4 mr-2">
            <Button variant="outline-dark">
              <b>Availability</b>
            </Button>{" "}
            <Button variant="outline-dark">
              <b>Industry</b>
            </Button>{" "}
            <Button variant="outline-dark">
              <b>Interests</b>
            </Button>{" "}
            <Button variant="outline-dark">
              <b>Expertise</b>
            </Button>{" "}
            <Button variant="outline-dark">
              <b>More Filters</b>
            </Button>{" "}
          </div>
        </div>
      </div>
      <hr />
      <div className="col-12">
        <div className="row">
          <div className="mt-3 ml-1 mr-1">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={team} />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>Biography</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={team} />
              <Card.Body>
                <Card.Title>Jane Doe</Card.Title>
                <Card.Text>Biography</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindMentor;
