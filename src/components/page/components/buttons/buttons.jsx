import React from 'react';

import useStyles from './styles';


const Buttons = ({
    children
}) => {

    const classes = useStyles();

    return (
        <div className={classes.buttonContainer}>
            {children}
        </div>
    );
};

export default Buttons;