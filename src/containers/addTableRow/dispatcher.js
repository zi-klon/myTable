import SetTitle from '../../redux/actions/setTitle';
import SetSeason from '../../redux/actions/setSeason';
import SetEpisode from '../../redux/actions/setEpisode';
import SetDate from '../../redux/actions/setDate';
import AddRow from './middlewares/addRow';


export default function (dispatch, {history}) {

    const gotoTable = () => history.push('/table');

    return {
        gotoTable: gotoTable,
        setTitle: value => dispatch(SetTitle(value)),
        setSeason: value => dispatch(SetSeason(value)),
        setDate: value => dispatch(SetDate(value)),
        setEpisode: value => dispatch(SetEpisode(value)),
        addRow: () => dispatch(AddRow(() => gotoTable()))
    };
}