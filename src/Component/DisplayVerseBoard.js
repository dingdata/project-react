import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./DisplayVerseBoard.css";

const DisplayVerseBoard = ({ verseArray }) => {
  console.log(verseArray); //Array of Objects

  const { verseString, referenceString } = verseArray;

  return (
    <div className="d-flex justify-content-center">
      <div>
        <Card border="secondary" bg="info" style={{ width: "20rem" }}>
          <Card.Header bg="light">
            {referenceString}{" "}
            <img
              src={`${process.env.PUBLIC_URL}/trash.svg`}
              className="image"
              onClick="#"
              alt="trash"
            />
          </Card.Header>
          <Card.Body>
            <Card.Text>{verseString}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

// const DisplayVerseBoard = (verseObj) => {
//   console.log(verseObj); //Array of Objects

//   const { verseString, referenceString } = verseObj;
//   console.log(verseObj.verseString);
//   console.log(referenceString);

//   return (
//     <div className="d-flex justify-content-center">
//       <Card border="primary" bg="light" style={{ width: "20rem" }}>
//         <Card.Body>
//           <Card.Header>{referenceString}</Card.Header>
//           <Card.Text>{verseString}</Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
export default DisplayVerseBoard;
