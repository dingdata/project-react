import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";

function DisplayCamInfo({ cameras }) {
  const { image, camera_id, location } = cameras;
  return (
    // <div>
    //   <img src={image} alt="trafficImage" />
    //   <div>Description: {description}</div>
    //   <div>ImageString: {image}</div>
    //   <div>Camera ID: {camera_id}</div>
    // </div>
    <div className="d-flex">
      <Card
        border="primary"
        bg="light"
        style={{ width: "30rem", padding: "5px" }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{ width: "30rem", height: "20rem" }}
        />
        <Card.Body>
          <Card.Header>Camera ID - {camera_id}</Card.Header>
          <Card.Text>Location</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem variant="primary">
              Longitude:{location.longitude}
            </ListGroupItem>
            <ListGroupItem variant="primary">
              Latitude: {location.latitude}
            </ListGroupItem>
          </ListGroup>
          <Card.Link href={image}>Download image</Card.Link>
        </Card.Body>
      </Card>
      <br></br>
    </div>

    // <Container fluid="md">
    //   <Row xs={1} md={2} className="g-4">
    //     {Array.from({ length: 4 }).map((_, idx) => (
    //       <Col>
    //         <Card
    //           padding="1px"
    //           border="primary"
    //           bg="light"
    //           style={{ width: "30rem" }}
    //         >
    //           <Card.Img variant="top" src={image} />
    //           <Card.Body>
    //             <Card.Header>Camera ID - {camera_id}</Card.Header>
    //             <Card.Text>Location</Card.Text>
    //             <ListGroup className="list-group-flush">
    //               <ListGroupItem variant="primary">
    //                 Longitude:{location.longitude}
    //               </ListGroupItem>
    //               <ListGroupItem variant="primary">
    //                 Latitude: {location.latitude}
    //               </ListGroupItem>
    //             </ListGroup>
    //             <Card.Link href={image}>Download image</Card.Link>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
}

export default DisplayCamInfo;
