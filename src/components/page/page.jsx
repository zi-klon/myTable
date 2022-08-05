import React from 'react';

import useStyles from './styles';

const Page = ({
    title,
    children
}) => {

    const classes = useStyles();

    return (
        <div className={classes.pageContainer}>
            <div className={classes.title}>
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    );
};

export default Page;