import React, { Component } from "react";
import Controls from "./Controls";
import css from "./Counter.module.css"

class Counter extends Component {
  static defaultProps = {
  initialValue : 0,
  }
  // static PropTypes = {
  
  // }
  state = {
  value: this.props.initialValue,
  }

  handleIncrement = () => {
    //  event доступин только в асинхронном коде как только функция снимается со стека разу очищается сохраняем его в локальную переменную
    // const { target } = event;
    // setTimeout(() => {
    //   console.log(target)
    // }, 1000);
    // console.log('click increace')
    // console.log(event.target)
    // Не основываясь на предыдущем состоянии передаем обект в   this.setState({value: 123,}) если нужно что то изменить от предыдущего состояния мы передаем кол бек функцию которая получает предыдущее состоянии 
    this.setState((prevSate) => {
      return {
        value: prevSate.value + 1,
      }
    })
  }
   handleDecrement = () => {
      this.setState((prevSate) => {
      return {
        value: prevSate.value - 1,
      }
    })
 }
  render() {
 
    return (
      <>
        <div className={css.wrapper}>
          <span>{this.state.value}</span>
          <Controls
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} />
       </div>
      </>
    );
  }
}

export default Counter;