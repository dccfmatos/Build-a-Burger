import React from 'react';
import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
    </Aux> 
//with the Aux component we have a wrapping root element
//Adjacent JSX elements must be wrapped in an enclosing tag
);

export default layout;