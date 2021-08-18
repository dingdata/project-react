import React, { useState, Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import DisplayVerse from "./DisplayVerse";
import { v4 as uuidv4 } from "uuid";

const RetrieveVerse = () => {
  const [verse, setVerse] = useState("");
  const [searchString, setSearchString] = useState("John 3:16");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (event) => {
    event.preventDefault();
    console.log(`Enter event Target Value ${event.target.value}`);
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("A verse is submitted: " + searchString);
    setIsLoading(true);
    console.log(`Before Get Verses using axios ${searchString}`);
    axios(`https://bible-api.com/${searchString}`)
      .then((res) => {
        console.log(`Retrieving data start ${res.data}`);
        if (res.items === 0) {
          const emptyDataError = new Error("No such verses");
          emptyDataError.statusCode = 500;
          console.log(`Retrieving data No such verse error`);
          throw emptyDataError;
        }
        console.log(`Retrieving data 2 ${res.data.text}`);
        setVerse(res.data.text);
      })
      .catch((error) => {
        console.error(error);
        // TODO: set error message
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Verse you want to find (e.g "John 3:16"):</label>
        <input type="text" value={searchString} onChange={onChangeHandler} />
        <input type="submit" value="SearchVerses" />
      </form>
      <div>{verse}</div>
      {/* {verses.errorMessage && (
        <div>{verses.isLoading ? <Loader /> : printVerses()}</div>
      )}
      {verses.errorMessage && <div className="err">{verses.errorMessage}</div>} */}
    </div>
  );
};

export default RetrieveVerse;

// class RetrieveVerse extends Component {
//   constructor() {
//     super();
//     this.state = {
//       verses: [],
//       value: 0,
//       errorMessage: "",
//       searchString: "",
//       isLoading: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ searchString: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.searchString);
//     event.preventDefault();
//     this.setState({ isLoading: true, errorMessage: "" });
//     axios(`https://bible-api.com/${this.state.searchString}`)
//       .then((res) => {
//         console.log(`Retrieving data start ${res.data}`);
//         if (res.items === 0) {
//           const emptyDataError = new Error("No such verses");
//           emptyDataError.statusCode = 500;
//           console.log(`Retrieving data 1`);
//           throw emptyDataError;
//         }
//         console.log(`Retrieving data 2 ${res.data.verses}`);
//         this.setState({ verses: res.data.verses, isLoading: false });
//       })
//       .catch((error) => {
//         console.error(error);
//         this.setState({
//           isLoading: false,
//           errorMessage: `No Data available for this selection:`,
//         });
//       });
//   }

//   printComments() {
//     console.log(`print comments ${this.state.verses}`);

//     return this.state.verses.map((verses) => (
//       <DisplayVerse verses={verses}> </DisplayVerse>
//     ));
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={this.state.searchString}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//         {!this.state.errorMessage && (
//           <div>{this.state.isLoading ? <Loader /> : this.printComments()}</div>
//         )}
//         {this.state.errorMessage && (
//           <div className="err">{this.state.errorMessage}</div>
//         )}
//       </div>
//     );
//   }
// }

// export default RetrieveVerse;
