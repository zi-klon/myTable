import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createUseStyles} from 'react-jss'

import connector from './connector';
import dispatcher from './dispatcher';

import Table from '../../components/table/table.jsx';

const Main = ({
    tableData = [],

    gotoForm,
    getTableData,
    deleteTableRow,
    clearTable
}) => {
    const useStyles = createUseStyles({
        tableContainer: {
            width: '80%',
            backgroundColor: '#6fbad1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        buttonContainer: {
            padding: 20,
            display: 'flex',
            '& > button': {
                backgroundColor: '#aeb4e5',
                padding: 5,
                fontSize: 16,
                fontWeight: 600,
                minWidth: 50,
                height: 40,
                border: '2px solid #98acb3',
                margin: [[0, 5]],
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#717699',
                    transition: 'background-color .5s'
                }
            }
        },
        title: {
            width: '100%',
            height: 80,
            backgroundColor: '#98acb3',
            textAlign: 'center'
        }
    });
    const classes = useStyles();
    return (
        <div className={classes.tableContainer}>
            <div className={classes.buttonContainer}>
                <button onClick={gotoForm}>
                    Добавить эпизод
                </button>
                {tableData.length ?
                    <button onClick={clearTable}>
                        Очистить таблицу
                    </button>
                    :
                    <button onClick={getTableData}>
                        Загрузить список эпизодов
                    </button>
                }
            </div>
            <div className={classes.title}>
                <h2>
                    Список эпизодов сериала «Во все тяжкие»
                </h2>
            </div>
            <Table
                data={tableData}
                deleteTableRow={deleteTableRow}
                clearTable={clearTable}/>
        </div>
    );
};

export default withRouter(connect(connector, dispatcher)(Main));