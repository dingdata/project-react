import React from "react";
import { Component } from "react";
import axios from "axios";
import DisplayTraffic from "./DisplayTraffic";
import Loader from "./Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./RetrieveTraffic.css";

class RetrieveTraffic extends Component {
  constructor() {
    super();
    this.state = {
      trafficCams: [],
      errorMessage: "",
      isLoading: false,
      searchDate: "2021-08-17",
      searchTime: "10:00",
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDate(event) {
    this.setState({ searchDate: event.target.value });
  }
  handleChangeTime(event) {
    this.setState({ searchTime: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.searchDate);
    event.preventDefault();
    this.setState({ isLoading: true, errorMessage: "" });
    axios(
      `https://api.data.gov.sg/v1/transport/traffic-images?date_time=${this.state.searchDate}T${this.state.searchTime}:00`
    )
      .then((res) => {
        console.log(
          `Retrieving data start ${res.data.api_info.status} - ${res.data.items} - SearchTime ${this.state.searchTime}`
        );
        if (
          //how to check if object is empty
          //{"items":[{}],"api_info":{"status":"healthy"}}
          Object.keys(res.data.items[0]).length === 0 &&
          res.data.items[0].constructor === Object
        ) {
          const emptyDataError = new Error("No Data Available for this date");
          emptyDataError.statusCode = 400;
          throw emptyDataError;
        }
        this.setState({ trafficCams: res.data.items, isLoading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          isLoading: false,
          errorMessage: `No Data available for this date:`,
        });
      });
  }

  displayImages() {
    let trafficCamArray = this.state.trafficCams;
    // console.log(`Traffic Object ${trafficCamArray.length}`);
    return trafficCamArray.map((trafficCam) => (
      <DisplayTraffic trafficCam={trafficCam}> </DisplayTraffic>
    ));
  }
  render() {
    return (
      <div>
        <Form
          className="d-flex justify-content-center"
          onSubmit={this.handleSubmit}
        >
          <div className="d-flex form-field">
            <Form.Label className="form-label">Date:</Form.Label>
            <Form.Control
              type="date"
              value={this.state.searchDate}
              onChange={this.handleChangeDate}
            />
          </div>
          <div className="d-flex form-field">
            <Form.Label className="form-label">Time:</Form.Label>
            <Form.Control
              required
              type="time"
              value={this.state.searchTime}
              onChange={this.handleChangeTime}
            />
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {!this.state.errorMessage && (
          <div>{this.state.isLoading ? <Loader /> : this.displayImages()}</div>
        )}
        {this.state.errorMessage && (
          <div className="err">{this.state.errorMessage}</div>
        )}
        {/* <form onSubmit={this.handleSubmit}>
          <label for="startDate">Date </label>
          <input
            type="date"
            value={this.state.searchDate}
            onChange={this.handleChangeDate}
          />
          <label for="startTime">Time: </label>
          <input
            required
            type="time"
            value={this.state.searchTime}
            onChange={this.handleChangeTime}
          />
          <input type="submit" value="Submit" />
        </form>
        {!this.state.errorMessage && (
          <div>{this.state.isLoading ? <Loader /> : this.displayImages()}</div>
        )}
        {this.state.errorMessage && (
          <div className="err">{this.state.errorMessage}</div>
        )} */}
      </div>
    );
  }
}

export default RetrieveTraffic;
