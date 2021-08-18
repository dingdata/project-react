import React from "react";
import DisplayCamInfo from "./DisplayCamInfo";

function DisplayTraffic({ trafficCam }) {
  const { timestamp } = trafficCam;
  console.log(`We are in display Traffic ${typeof trafficCam.cameras}`);
  console.log(`We are in display Traffic images ${trafficCam.cameras.length}`);
  return (
    <div>
      <p> Timestamp: {timestamp}</p>
      {trafficCam.cameras.map((cameras) => (
        <DisplayCamInfo cameras={cameras} />
      ))}

      <br></br>
    </div>
  );
}

export default DisplayTraffic;
