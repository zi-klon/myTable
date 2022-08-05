import {createUseStyles} from 'react-jss'

export default createUseStyles({
    modalLayout: {
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5
    }
});