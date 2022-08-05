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
        const currentValue = value || '';
        if(type === 'number') {
            return currentValue.replace(/[^0-9]/g, '');
        } else {
            return currentValue;
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