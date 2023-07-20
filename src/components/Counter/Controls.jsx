import React from 'react';
import css from './Counter.module.css'
const Controls = ({onIncrement, onDecrement}) => (
  <div className={css.btnwrapper}>
    <button type="button" onClick={onIncrement}> Increase</button>
    <button type="button" onClick={onDecrement}> Decrease</button>
            
  </div>
);

export default Controls;

