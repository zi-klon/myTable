import SetTitle from './actions/setTitle';
import SetSeason from './actions/setSeason';
import SetEpisode from './actions/setEpisode';
import SetDate from './actions/setDate';


export default function (dispatch, {history}) {
    return {
        gotoTable: () => history.push('/table'),
        setTitle: value => dispatch(SetTitle(value)),
        setSeason: value => dispatch(SetSeason(value)),
        setDate: value => dispatch(SetDate(value)),
        setEpisode: value => dispatch(SetEpisode(value)),
    };
}