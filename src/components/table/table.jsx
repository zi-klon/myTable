import React, {useState, useEffect} from 'react';

import useStyles from './styles';

import Sorter from '../sorter/sorter.jsx';

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

    const sort = ({field, dir, type}) => {
        switch (type) {
            case 'text': {
                setTableData(data.sort((a, b) => {
                    return dir === 'desc'
                        ? a[field].localeCompare(b[field])
                        : b[field].localeCompare(a[field])
                }));
                setPage(currentPage);
                break;
            }

            case 'number': {
                setTableData(data.sort((a, b) => {
                    return dir === 'desc'
                        ? a[field] - b[field]
                        : b[field] - a[field]
                }));
                setPage(currentPage);
                break;
            }

            case 'date': {
                setTableData(data.sort((a, b) => {
                    return dir === 'desc'
                        ? Date.parse(a[field]) - Date.parse(b[field])
                        : Date.parse(b[field]) - Date.parse(a[field])
                }));
                setPage(currentPage);
                break;
            }
        }
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
                            <div className={classes.thContainer}>
                                <h4>Порядковый номер</h4>
                                <Sorter
                                    type={'number'}
                                    field={'episode_id'}
                                    sort={sort}/>
                            </div>
                        </th>
                        <th>
                            <div className={classes.thContainer}>
                                <h4>Название эпизода</h4>
                                <Sorter
                                    type={'text'}
                                    field={'title'}
                                    sort={sort}/>
                            </div>
                        </th>
                        <th>
                            <div className={classes.thContainer}>
                                <h4>Дата выхода</h4>
                                <Sorter
                                    type={'date'}
                                    field={'air_date'}
                                    sort={sort}/>
                            </div>
                        </th>
                        <th>
                            <div className={classes.thContainer}>
                                <h4>Номер сезона</h4>
                                <Sorter
                                    type={'text'}
                                    field={'season'}
                                    sort={sort}/>
                            </div>
                        </th>
                        <th>
                            <div className={classes.thContainer}>
                                <h4>Номер эпизода</h4>
                                <Sorter
                                    type={'text'}
                                    field={'episode'}
                                    sort={sort}/>
                            </div>
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