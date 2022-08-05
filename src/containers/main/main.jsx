import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import connector from './connector';
import dispatcher from './dispatcher';

import Table from '../../components/table/table.jsx';
import Preloader from '../../components/preloader/preloader.jsx';
import Page from '../../components/page/page.jsx';
import Buttons from '../../components/page/components/buttons/buttons.jsx';

const Main = ({
    tableData = [],

    gotoForm,
    getTableData,
    deleteTableRow,
    clearTable

}) => {
    const [displayPreloader, setDisplayPreloader] = useState(false);

    const loadData = async () => {
        setDisplayPreloader(true);
        await getTableData();
        setDisplayPreloader(false);
    };

    const savedTableData = 'savedTableData' in sessionStorage
        ? JSON.parse(sessionStorage.getItem('savedTableData'))
        : null;

    const currentData = savedTableData || tableData;

    return (
        <Page title='Список эпизодов сериала «Во все тяжкие»'>
            <Preloader display={displayPreloader}/>
            <Buttons>
                <button onClick={gotoForm}>
                    Добавить эпизод
                </button>
                {currentData.length ?
                    <button onClick={clearTable}>
                        Очистить таблицу
                    </button>
                    :
                    <button onClick={loadData}>
                        Загрузить список эпизодов
                    </button>
                }
            </Buttons>
            <Table
                data={currentData}
                deleteTableRow={deleteTableRow}
                clearTable={clearTable}/>
        </Page>
    );
};

export default withRouter(connect(connector, dispatcher)(Main));