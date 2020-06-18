import React from 'react';
import style from './BuildControl.module.css';

const buildControl = (props) => (
    <div className= {style.buildControl}>
        <div className= {style.Label}>{props.label}</div>
        <button 
            className= {style.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>Less</button> 
            {/*if ingredient is at 0 button gets disabled */}
            
        <button 
            className= {style.More} 
            onClick={props.added}>More</button>
    </div>

);

export default buildControl;