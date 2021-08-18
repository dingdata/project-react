import React from "react";
import DisplayCamInfo from "./DisplayCamInfo";
import "./DisplayTraffic.css";

function DisplayTraffic({ trafficCam }) {
  const { timestamp } = trafficCam;
  console.log(`We are in display Traffic ${typeof trafficCam.cameras}`);
  console.log(`We are in display Traffic images ${trafficCam.cameras.length}`);
  return (
    <div>
      <div>
        You have retrieve traffic at:{" "}
        {new Date(Date.parse(timestamp)).toLocaleString()}
      </div>
      <div className="displayGallery">
        {trafficCam.cameras.map((cameras) => (
          <DisplayCamInfo cameras={cameras} />
        ))}
      </div>

      <br></br>
    </div>
  );
}

export default DisplayTraffic;
