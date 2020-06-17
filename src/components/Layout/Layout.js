import React from 'react';
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className = {styles.Content}>
        {props.children}
    </main>
    </Aux> 
//with the Aux component we have a wrapping root element
//Adjacent JSX elements must be wrapped in an enclosing tag
);

export default layout;