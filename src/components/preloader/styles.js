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
    circle: {
        width: 70,
        height: 70,
        border: '5px solid #98acb3',
        borderRadius: '50%',
        borderTop: 'none',
        borderLeft: 'none',
        animation: 'spin 2s infinite linear'
    },

    '@keyframes spin': {
        from: {
            transform: 'rotate(0deg)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    }
});