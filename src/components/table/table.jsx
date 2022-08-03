import React, {useState, useMemo} from 'react';
import {createUseStyles} from 'react-jss'


const Table = ({
    data = [],
    deleteTableRow
}) => {
    const useStyles = createUseStyles({
        table: {
            borderTop: 'none',
            width: '90%',
            '& > table': {
                borderCollapse: 'collapse',
                width: '100%',
                '& > thead': {
                    '& > tr': {
                        borderBottom: '2px solid #98acb3',
                        '& > th': {
                            padding: 10,
                            borderRight: '2px solid #98acb3'
                        },
                        '& :last-child': {
                            borderRight: 'none'
                        }
                    }
                },
                '& > tbody': {
                    '& > tr': {
                        borderBottom: '2px solid #98acb3',
                        '& > td': {
                            padding: 10,
                            borderRight: '2px solid #98acb3',
                            boxSizing: 'border-box',
                            '& > button': {
                                backgroundColor: '#db7d7d',
                                border: 'none',
                                width: '100%',
                                height: 25,
                            },
                            '& :hover': {
                                color: 'red'
                            }
                        },
                    },
                    '& :last-child': {
                        borderRight: 'none'
                    },
                    '& :hover': {
                        cursor: 'pointer',
                        backgroundColor: '#d8ebed',
                        transition: 'background-color .7s'
                    }
                }
            }
        },
        placeholder: {
            padding: 30,
            height: 80,
            fontSize: 20,
            textAlign: 'center'
        }
    });
    const classes = useStyles();
    const [tableData, setTableData] = useState(data);
    return (
        <div className={classes.table}>
            {data.length ?
                <table>
                    <thead>
                    <tr>
                        <th>
                            Номер эпизода
                        </th>
                        <th>
                            Название эпизода
                        </th>
                        <th>
                            Дата выхода
                        </th>
                        <th>
                            Номер сезона/ Номер эпизода
                        </th>
                        <th>
                            Персонажи
                        </th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(({
                        episode_id,
                        episode,
                        title,
                        characters,
                        air_date,
                        season
                    }) => (
                        <tr key={episode_id}>
                            <td>{episode_id}</td>
                            <td>{title}</td>
                            <td>{air_date}</td>
                            <td>{`Сезон ${season} эпизод ${episode}`}</td>
                            <td>{characters.length ? 'yes' : 'no'}</td>
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