import React from 'react';
import style from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'},
    { label: 'Cheese', type: 'cheese'},
];

const buildControls = (props) => (
    <div className={style.BuildControls}>
        {controls.map(ctrl => ( //map each element of this array (controls)
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}//into a BuildControl where
            //we set a key (can be label because it is always different)
            //and pass a label
            added={() => props.ingredientAdded(ctrl.type)}/>
        ))}
    </div>
);

export default buildControls;