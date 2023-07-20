import React, { Component } from "react";
// import Counter from "./Counter/Counter";
// import Dropdown from "./Dropdown/Dropdown";
import Colorpicker from './Colorpicker/Colorpicker'

  const colorPickerOptions = [
    { label: 'red', color: '#ff0000' },
    { label: 'green', color: '#008000' },
    { label: 'blue', color: '#0000FF' },
    { label: 'grey', color: '#808080' },
    { label: 'pink', color: '#9F2B68' },
    { label: 'indigo', color: '#4B0082' },
  ];



class App extends Component {
 
  render() {
 
    return (
      <>
        {/* <Counter initialValue={0} /> */}
        {/* <Dropdown/> */}
        <Colorpicker options={colorPickerOptions } />
      </>
    );
  }
}

export default App;