import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Col, Card } from "react-bootstrap";

function DisplayCamInfo({ cameras }) {
  const { description, image, camera_id } = cameras;
  return (
    // <div>
    //   <img src={image} alt="trafficImage" />
    //   <div>Description: {description}</div>
    //   <div>ImageString: {image}</div>
    //   <div>Camera ID: {camera_id}</div>
    // </div>

    <Container>
      <Row className="justify-content-md-center">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card border="primary" bg="light" style={{ width: "30rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Header>{camera_id}</Card.Header>
                <Card.Text>{image}</Card.Text>
                <Card.Subtitle>{description}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DisplayCamInfo;
