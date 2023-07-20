import React, { Component } from 'react'
import css from './Dropdown.module.css'

class Dropdown extends Component {
  state = {
  visible: false,
  }
  toggle = () => {
    this.setState(prevSate => ({
    visible: !prevSate.visible,
  }))
  }
  // show = () => {
  // this.setState({visible: true})
  // }
  // hide = () => {
  // this.setState({visible: false})
  // }
  render() {
    return (
      <div className={css.Dropdown}>
        <button type='button' className={css.Dropdown_toggle} onClick={this.toggle}>{this.state.visible ? 'Hide' : 'Show' }</button>
        {/* <button type='button' className={css.Dropdown_toggle} onClick={this.show}>Show </button> */}
         {/* <button type='button' className={css.Dropdown_toggle} onClick={this.hide}>Hide </button> */}
        {this.state.visible && ( <div className={css.Dropdown_menu}>
          Выподающее меню
        </div>)}
       
      </div>
    );
  }
}
export default Dropdown;