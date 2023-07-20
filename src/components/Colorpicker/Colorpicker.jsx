import React, { Component } from 'react';
import './Colorpicker.css';

class Colorpicker extends Component {
  state = {
    activeOptionIdx: 0,
  }

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker_option'];
           
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker_options--active');
    }
    return optionClasses.join('  ');
  };

  render() {
    return (
   <div className='ColorPicker'>
  <h2 className='ColorPicker_title'>Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassNames = this.makeOptionClassName(index);
           
            return (
              <button
                key={label}
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