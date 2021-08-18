import React from "react";
import { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import DisplayVerse from "./DisplayVerse";

class RetrieveVerse extends Component {
  constructor() {
    super();
    this.state = {
      verses: [],
      value: 0,
      errorMessage: "",
      searchString: "",
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.searchString);
    event.preventDefault();
    this.setState({ isLoading: true, errorMessage: "" });
    axios(
      //"https://api.data.gov.sg/v1/transport/traffic-images?date_time=2021-08-14T22:11:50"
      //"https://api.data.gov.sg/v1/transport/traffic-images?date_time="
      //"http://labs.bible.org/api/?passage=John+3:16&type=JSON"
      `https://bible-api.com/${this.state.searchString}`
    )
      .then((res) => {
        console.log(`Retrieving data start ${res.data}`);
        if (res.items === 0) {
          const emptyDataError = new Error("No such verses");
          emptyDataError.statusCode = 500;
          console.log(`Retrieving data 1`);
          throw emptyDataError;
        }
        console.log(`Retrieving data 2 ${res.data.verses}`);
        this.setState({ verses: res.data.verses, isLoading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          isLoading: false,
          errorMessage: `No Data available for this selection:`,
        });
      });
  }

  printComments() {
    console.log(`print comments ${this.state.verses}`);

    return this.state.verses.map((verses) => (
      <DisplayVerse verses={verses}> </DisplayVerse>
    ));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.searchString}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {!this.state.errorMessage && (
          <div>{this.state.isLoading ? <Loader /> : this.printComments()}</div>
        )}
        {this.state.errorMessage && (
          <div className="err">{this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}

export default RetrieveVerse;
