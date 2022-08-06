import React from 'react';

import useStyles from './styles';

const Sorter = ({
    sort,
    type,
    field
}) => {

    const classes = useStyles();

    return (
        <div className={classes.sorter}>
            <div
                className={classes.icon}
                onClick={() => sort(
                {
                    field,
                    type,
                    dir: 'desc'
                })}/>
            <div
                className={classes.icon}
                onClick={() => sort(
                {
                    field,
                    type,
                    dir: 'asc'
                })}/>
        </div>
    );
};

export default Sorter;