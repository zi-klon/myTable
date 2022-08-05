import React from 'react';

import useStyles from './styles';

import Input from '../input/input.jsx';

const Form = ({
    form: {
        title,
        air_date,
        season,
        episode
    },
    setTitle,
    setDate,
    setSeason,
    setEpisode,
    submit
}) => {

    const classes = useStyles();

    const submitForm = evt => {
        evt.preventDefault();
        submit();
    };

    return (
        <div className={classes.form}>
            <form onSubmit={submitForm}>
                <Input
                    type="text"
                    title="Название эпизода"
                    value={title}
                    change={setTitle}/>
                <Input
                    type="date"
                    title="Дата выхода"
                    value={air_date}
                    change={setDate}/>
                <Input
                    type="number"
                    title="Номер сезона"
                    value={season}
                    change={setSeason}/>
                <Input
                    type="number"
                    title="Номер эпизода"
                    value={episode}
                    change={setEpisode}/>

                <input
                    type="submit"
                    value="Подтвердить"
                    id="submit"/>
            </form>
        </div>
    );
};

export default Form;