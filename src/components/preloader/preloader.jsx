import React from 'react';

import useStyles from './styles';

const Preloader = ({
    display
}) => {
    const classes = useStyles();
    return display && (
        <div className={classes.container}>
            <p className={classes.text}>Загрузка...</p>
        </div>
    )
};

export default Preloader;