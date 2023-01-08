import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import background from "../images/background.jpg";
import "../CSS/BookCard.css";

export default function BookCard() {
  return (
    //   <div className="grid-div">
          <Card style={{ width: "18rem" }} className="explore-card">
            <Card.Img variant="top" src={background} />
            <Card.Body>
              <Card.Title>Name of the Book</Card.Title>
              <Button
                variant="outline-light"
                size="sm"
                className="explore-card-button"
              >
                See details
              </Button>
            </Card.Body>
          </Card>
  );
}
