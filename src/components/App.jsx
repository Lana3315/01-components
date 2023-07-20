import React, { Component } from "react";
// import Counter from "./Counter";
// import Dropdown from "./Dropdown/Dropdown";
// import Colorpicker from './Colorpicker/Colorpicker'

  // const colorPickerOptions = [
  //   { label: 'red', color: '#ff0000' },
  //   { label: 'green', color: '#008000' },
  //   { label: 'blue', color: '#0000FF' },
  //   { label: 'grey', color: '#808080' },
  //   { label: 'pink', color: '#9F2B68' },
  //   { label: 'indigo', color: '#4B0082' },
  // ];



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad:0
  }
  
  handleBtnClick = (event) => {
  const { name } = event.target;
    this.setState((prevState) => ({
    [name]: prevState[name] + 1,
    }));
  }
   countTotalFeedBack = () => {
    return Object.values(this.state).reduce((total, curr) => (total + curr))
    
  };
  render() {
  const total = this.countTotalFeedBack();
    return (
      <>
        <div>
          <div>
          <h1>Please leave feedback</h1>
            <ul>
            <li><button type="button" name ="good"onClick={this.handleBtnClick}>Good</button ></li>
            <li><button type="button" name="neutral" onClick={this.handleBtnClick}>Neutral</button></li>
            <li><button type="button" name="bad"onClick={this.handleBtnClick}>Bad</button></li>
            </ul>
          </div>
          <div>
          <h2>Statics</h2>
          <ul>
              <li><p>Good:{this.state.good }</p></li>
            <li><p>Neutral:{this.state.neutral}</p></li>
              <li><p>Bad:{this.state.bad}</p></li>
               <p>Total: {total}</p>
             <li><p>Positive feedback:%</p></li>
            </ul>
            </div>
        </div>
        {/* <Counter initialValue={0} /> */}
        {/* <Dropdown/> */}
        {/* <Colorpicker options={colorPickerOptions } /> */}
      </>
    );
  }
}

export default App;