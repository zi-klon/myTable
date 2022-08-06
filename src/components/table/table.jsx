import React, {useState, useMemo, useEffect} from 'react';

import useStyles from './styles';

const Table = ({
    data = [],
    deleteTableRow
}) => {

    const classes = useStyles();

    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const setPage = value => {
        const end = value * 10;
        const begin = end - 10;

        setTableData(data.slice(begin, end));
        setCurrentPage(value);

        return (data.slice(begin, end)).length;
    };

    useEffect(() => {

        if(!setPage(currentPage) && currentPage !== 1) {
            setPage(currentPage - 1);
            setCurrentPage(currentPage - 1);
        }
    }, [data]);

    const buttonsArr = new Array(Math.ceil(data?.length / 10))
        .fill(1)
        .map((item, index) => item + index);

    return (
        <div className={classes.table}>
            {tableData.length ?
                <>
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
                    {tableData.map(({
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
                    <div className={classes.paginationButtons}>
                        {buttonsArr.length > 1
                            ? buttonsArr.map(item => (
                                <button
                                    onClick={() => setPage(item)}
                                    key={item}>
                                    {item}
                                </button>
                            ))  : null
                        }
                    </div>
                </>
            :
            <div className={classes.placeholder}>
                Необходимо загрузить список эпизодов
            </div>
            }
        </div>
    );
};

export default Table;