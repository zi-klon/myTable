import React from 'react';

import useStyles from './styles';

const Modal = ({
    message,
    confirm,
    decline,
    canReject = true,
    resolve
}) => {
    const classes = useStyles();

    return (
        <div className={classes.modalContainer}>
            <div className={classes.modalContent}>
                {message}
            </div>
            <div className={classes.modalButtons}>
                <button onClick={() => resolve(true)}>
                    {confirm}
                </button>
                {canReject &&
                <button onClick={() => resolve(false)}>
                    {decline}
                </button>
                }
            </div>
        </div>
    );
};

export default Modal;