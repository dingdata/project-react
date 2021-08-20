import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
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
    // setVerseArray(verseArray.push(verseObj)); // need to set original array with new object
    console.log(`I am at Add to Board ${verseArray} - ${reference}`);
  };

  const deleteReference = (id) => {
    console.log(id);
    console.log(verseArray);
    const updatedVerseArray = [...verseArray].filter(
      (verseArray) => verseArray.referenceString !== id
    );
    setVerseArray(updatedVerseArray);
  };

  return (
    <div
      data-testid="retrieveVerse"
      className="d-flex flex-column justify-content-center"
    >
      <div className="d-flex flex-wrap">
        <Card border="primary" bg="light" style={{ width: "20rem" }}>
          <Card.Header>{reference}</Card.Header>
          <Card.Body>
            <Card.Text>{verse}</Card.Text>
            {/* <button onClick={() => addToBoard()}>Add-To-Board</button> */}
            <button onClick={(event) => addToBoard()}>Add-To-Board</button>
          </Card.Body>
        </Card>
        {console.log(verseArray)}
        {verseArray.map((verseArray) => (
          <DisplayVerseBoard
            verseArray={verseArray}
            deleteReference={deleteReference}
          >
            {" "}
          </DisplayVerseBoard>
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
