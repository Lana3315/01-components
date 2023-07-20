import React, { Component } from "react";
// import Counter from "./Counter/Counter";
import Dropdown from "./Dropdown/Dropdown";





class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
}
 

  render() {
 
    return (
      <>
        {/* <Counter initialValue={0} /> */}
        <Dropdown/>
      </>
    );
  }
}

export default App;