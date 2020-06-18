import React from 'react';
import style from './BuildControl.module.css';

const buildControl = (props) => (
    <div className= {style.buildControl}>
        <div className= {style.Label}>{props.label}</div>
        <button className= {style.Less}>Less</button>
        <button className= {style.More}>More</button>
    </div>

);

export default buildControl;