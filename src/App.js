import React, { Component } from "react";
import "./App.css";
import { subscribeToTimer } from "./api";
import DrawingForm from "./DrawingForm";
import DrawingList from "./DrawingList";
import { subscribeToDrawings } from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    // subscribeToTimer(timestamp => {
    //   this.setState({
    //     timestamp
    //   });
    // });

    subscribeToDrawings(drawing => {
      console.log(drawing);
      this.setState(prevState => ({
        drawings: prevState.drawings.concat([drawing])
      }));
    });
  }

  state = {
    drawings: []
  };

  render() {
    console.log(this.state.drawings);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Our awesome drawing app</h2>
        </div>
        {/* timestamp: {this.state.timestamp} */}
        <DrawingForm />
        <DrawingList {...this.state} />
      </div>
    );
  }
}

export default App;
