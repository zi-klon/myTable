import React from 'react';

import useStyles from './styles';

const Preloader = ({
    display
}) => {
    const classes = useStyles();
    return display && (
        <div className={classes.container}>
            <div className={classes.circle}/>
        </div>
    )
};

export default Preloader;