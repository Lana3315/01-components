import React, { Component } from "react";
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
// import Notification  from './Notification/Notification';




class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  leaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    return (
      <>
       <Section title="Please leave feedback">
        <FeedbackOptions
           options={Object.keys(this.state)}
            leaveFeedback={this.leaveFeedback}
        />
        </Section>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}></Statistics>
      </>
    );
  }
}

export default App;