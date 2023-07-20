import React, { Component } from 'react';
import './Colorpicker.css';

class Colorpicker extends Component {
  state = {
    activeOptionIdx: 0,
  }
  setActiveIndex = (index) => {
  this.setState({ activeOptionIdx: index })
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker_option'];
           
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker_options--active');
    }
    return optionClasses.join('  ');
  };

  render() {
    const {label} = this.props.options[this.state.activeOptionIdx]

    return (

   <div className='ColorPicker'>
        <h2 className='ColorPicker_title'>Color Picker</h2>
        <p> Choose color: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassNames = this.makeOptionClassName(index);
           
            return (
              <button
                key={label}
                onClick={() =>this.setActiveIndex(index)}
                className={optionClassNames}
                style={{ backgroundColor: color }}
              ></button>
            )
          })}
      </div>
</div> 
)
}
}
export default Colorpicker;