import React from 'react';

import useStyles from './styles';

import Input from '../../components/input/input.jsx';

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

    return (
        <form>
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

            <button onSubmit={submit}>
                Переход к таблице
            </button>
        </form>
    );
};

export default Form;