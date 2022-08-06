import {createUseStyles} from 'react-jss'

export default createUseStyles({
    sorter: {
        display: 'flex',
        flexDirection: 'column',
        height: 40,
        justifyContent: 'space-around',
        marginLeft: 10,
        '& :first-child': {
            transform: 'rotate(135deg)'
        },
        '& :last-child': {
            transform: 'rotate(-45deg)'
        },
    },
    icon: {
        boxSizing: 'border-box',
        border: '2px solid grey',
        width: 10,
        height: 10,
        borderRight: 'none',
        borderTop: 'none',
        cursor: 'pointer'
    }
});