import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import connector from './connector';
import dispatcher from './dispatcher';
import useStyles from './styles';

import Table from '../../components/table/table.jsx';
import Preloader from '../../components/preloader/preloader.jsx';

const Main = ({
    tableData = [],

    gotoForm,
    getTableData,
    deleteTableRow,
    clearTable

}) => {

    const classes = useStyles();
    const [displayPreloader, setDisplayPreloader] = useState(false);

    const loadData = async () => {
        setDisplayPreloader(true);
        await getTableData();
        setDisplayPreloader(false);
    };

    return (
        <div className={classes.tableContainer}>
            <Preloader display={displayPreloader}/>
            <div className={classes.buttonContainer}>
                <button onClick={gotoForm}>
                    Добавить эпизод
                </button>
                {tableData.length ?
                    <button onClick={clearTable}>
                        Очистить таблицу
                    </button>
                    :
                    <button onClick={loadData}>
                        Загрузить список эпизодов
                    </button>
                }
            </div>
            <div className={classes.title}>
                <h2>Список эпизодов сериала «Во все тяжкие»</h2>
            </div>
            <Table
                data={tableData}
                deleteTableRow={deleteTableRow}
                clearTable={clearTable}/>
        </div>
    );
};

export default withRouter(connect(connector, dispatcher)(Main));