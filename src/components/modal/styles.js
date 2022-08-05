import {createUseStyles} from 'react-jss'

export default createUseStyles({
    modalContainer: {
        width: 400,
        backgroundColor: '#fff',
        borderRadius: '12px',
        position: 'fixed',
        padding: 20,
        fontSize: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    modalContent: {
        width: '100%'
    },
    modalButtons: {
        display: 'flex',
        width: '30%',
        justifyContent: 'end',
        marginTop: 10,
        '& > button': {
            backgroundColor: '#db7d7d',
            fontSize: 16,
            minWidth: 50,
            height: 40,
            borderRadius: 10,
            border: 'none',
            margin: [[0, 5]],
            opacity: 1,
            '&:hover': {
                cursor: 'pointer',
                transition: 'opacity .5s',
                opacity: 0.7
            },
            '&:first-child': {
                backgroundColor: '#7ddbd0'
            }
        }
    }
});