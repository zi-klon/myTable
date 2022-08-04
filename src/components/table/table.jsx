import React, {useState, useMemo} from 'react';

import useStyles from './styles';

const Table = ({
    data = [],
    deleteTableRow
}) => {

    const classes = useStyles();
    const [tableData, setTableData] = useState(data);

    return (
        <div className={classes.table}>
            {data.length ?
                <table>
                    <thead>
                    <tr>
                        <th>
                            Порядковый номер
                        </th>
                        <th>
                            Название эпизода
                        </th>
                        <th>
                            Дата выхода
                        </th>
                        <th>
                            Номер сезона
                        </th>
                        <th>
                            Номер эпизода
                        </th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(({
                        episode_id,
                        episode,
                        title,
                        air_date,
                        season
                    }) => (
                        <tr key={episode_id}>
                            <td>{episode_id}</td>
                            <td>{title}</td>
                            <td>{air_date}</td>
                            <td>{`Сезон ${season}`}</td>
                            <td>{`Эпизод ${episode}`}</td>
                            <td>
                                <button onClick={() => deleteTableRow({id: episode_id, title})}>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                : <div className={classes.placeholder}>
                    Необходимо загрузить список эпизодов
                </div>
            }
        </div>
    );
};

export default Table;