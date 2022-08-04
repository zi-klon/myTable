import React from 'react';

import useStyles from './styles';

const Input = ({
    type,
    value,
    title,
    placeholder,
    change
}) => {

    const getValue = (value, type) => {
        if(type === 'number') {
            return value.replace(/[^0-9]/g, '');
        } else {
            return value;
        }
    };

    const onChange = ({target: {value}}) => {
        if (change) {
            change((value));
        }
    };

    const classes = useStyles();

    return (
        <div className={classes.inputContainer}>
            <label>{title}</label>
            <input
                type={type}
                value={getValue(value, type)}
                onChange={onChange}
                placeholder={placeholder}/>
        </div>
    )
};

export default Input;