import React from "react";

const DisplayVerse = ({ verses }) => {
  console.log(`We are in display Verses ${typeof verses}`);
  return (
    <div>
      <div>
        <p> {JSON.stringify(verses.text)}</p>
        <br></br>
      </div>
    </div>
  );
};

export default DisplayVerse;
