import {createUseStyles} from 'react-jss'

export default createUseStyles({
    container: {
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    text: {
        font: '60px bold',
        color: '#f7f0f0',
    }
});