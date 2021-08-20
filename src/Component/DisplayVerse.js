import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import DisplayVerseBoard from "./DisplayVerseBoard";

const DisplayVerse = ({ verse, reference }) => {
  const [verseArray, setVerseArray] = useState([]);

  // const addToBoard = () => {
  //   // event.preventDefault();
  //   console.log(`I am at Add to Board ${verse} - ${reference}`);
  //   const verseObj = {
  //     verseString: verse,
  //     referenceString: reference,
  //   };
  //   setVerseArray(verseObj);
  // };

  // make addToBoard an event
  const addToBoard = () => {
    //event.preventDefault();
    console.log(`I am at Add to Board ${verseArray} - ${reference}`);
    const verseObj = {
      verseString: verse,
      referenceString: reference,
    };
    setVerseArray([...verseArray, verseObj]); // need to set original array with new object
    console.log(`I am at Add to Board ${verseArray} - ${reference}`);
  };

  return (
    <div data-testid="retrieveVerse" className="d-flex justify-content-center">
      <Card border="primary" bg="light" style={{ width: "20rem" }}>
        <Card.Header>{reference}</Card.Header>
        <Card.Body>
          <Card.Text>{verse}</Card.Text>
          {/* <button onClick={() => addToBoard()}>Add-To-Board</button> */}
          <button onClick={(event) => addToBoard()}>Add-To-Board</button>
        </Card.Body>
      </Card>
      <div>
        {verseArray.map((verseArray) => (
          <DisplayVerseBoard verseArray={verseArray}> </DisplayVerseBoard>
        ))}
        {/* {!verse &&
        verseArray.map(() => (
          <DisplayVerseBoard verseArray={verseArray}> </DisplayVerseBoard>
        ))} */}

        {/* {verseArray.map(() => (
        <DisplayVerseBoard verseObj={verseObj}></DisplayVerseBoard>
      ))} */}
      </div>
    </div>
  );
};

// const DisplayVerse = ({ verse, reference }) => {
//   const [verseObj, setVerseObj] = useState({
//     verseString: verse,
//     referenceString: reference,
//   });

//   const addToBoard = () => {
//     // event.preventDefault();
//     setVerseObj(verseObj);
//     console.log("I am at Add to Board");
//   };

//   return (
//     <div className="d-flex justify-content-center">
//       <Card border="primary" bg="light" style={{ width: "20rem" }}>
//         <Card.Body>
//           <Card.Header>{reference}</Card.Header>
//           <Card.Text>{verse}</Card.Text>
//           <button onClick={() => addToBoard()}>Add-To-Board</button>
//         </Card.Body>
//       </Card>
//       {!verse && <DisplayVerseBoard verseObj={verseObj}> </DisplayVerseBoard>}

//       {/* {verseArray.map(() => (
//         <DisplayVerseBoard verseObj={verseObj}></DisplayVerseBoard>
//       ))} */}
//     </div>
//   );
// };
export default DisplayVerse;
