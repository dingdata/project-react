import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const DisplayVerseBoard = (verseObj) => {
  console.log(verseObj); //Array of Objects

  const { verseString, referenceString } = verseObj;

  return (
    <div className="d-flex justify-content-center">
      <Card border="primary" bg="light" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Header>{referenceString}</Card.Header>
          <Card.Text>{verseString}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DisplayVerseBoard;
