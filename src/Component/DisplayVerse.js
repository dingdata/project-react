import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import DisplayVerseBoard from "./DisplayVerseBoard";

const DisplayVerse = ({ verse, reference }) => {
  const verseObj = {
    verseString: verse,
    referenceString: reference,
  };

  const [verseArray, setVerseArray] = useState([verseObj]);

  const addToBoard = (event) => {
    event.preventDefault();
    setVerseArray([...verseArray, verseObj]);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card border="primary" bg="light" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Header>{reference}</Card.Header>
          <Card.Text>{verse}</Card.Text>
          <button onClick={addToBoard}>Add-To-Board</button>
        </Card.Body>
      </Card>

      {verseArray.map(() => (
        <DisplayVerseBoard verseObj={verseObj}></DisplayVerseBoard>
      ))}
    </div>
  );
};

export default DisplayVerse;
