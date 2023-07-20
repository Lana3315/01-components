import React, { Component } from 'react'
import css from './Colorpicker.module.css'

class Colorpicker extends Component {
  state = {
    activeOptionIdx: 0,
  }
  render() {
    return (
   <div className={css.ColorPicker}>
  <h2 className={css.ColorPicker_title }>Color Picker</h2>
        <div >
          {this.props.options.map(({ label, color }, index) => (
            <button type='button'
              key={label}
              className={css.ColorPicker_option }
               style ={{backgroundColor:color, border: index === this.state.activeOptionIdx ?  '5px solid black' : 'none'}}>
      
      </button>
          ))};
    
      </div>
</div> 
)
}
}
export default Colorpicker;